import { Cart, Category, Product, ShopScreenNotification } from "@/types/types";
import { Alert } from "react-native";
import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  ImageGravity,
  Query,
  Storage,
} from "react-native-appwrite";
export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.ahmedsamir.elsakaelectric",
  projectId: "66d1d66d002baaf15d33",
  storageId: "66e6bba3001c4421e241",
  databaseId: "66d1d90e003cb70104ce",
  userCollectionId: "66d1d931003d64508125",
  categoriesCollectionId: "66e6b67f003cf43f1fe0",
  productsCollectionId: "66e7bbb6003830f8ff6d",
  shopScreenCategoriesId: "66ead2c8002fdbdf4d8d",
  shopScreenNotificationsId: "66ec379d00279ee36ed9",
  cartId: "66ed3c88002c98e8b650",
};

const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register user
export async function createUser(
  email: string,
  password: string,
  username: string
) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) throw Error;

    // console.log(newAccount, "newAccount");
    const avatarUrl = avatars.getInitials(username);

    try {
      const session = await account.createEmailPasswordSession(email, password);
    } catch (error: any) {
      throw new Error(error);
    }
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username: username,
        avatar: avatarUrl,
      }
    );

    // console.log(newUser, "newUser");
    return newUser;
  } catch (error: any) {
    throw new Error(error);
  }
}

// Sign In
export async function signIn(email: string, password: string) {
  try {
    const session = await account.createEmailPasswordSession(email, password);

    return session;
  } catch (error: any) {
    console.log(error + "ahmed2");
    throw new Error(error);
  }
}

// Get Account
export async function getAccount() {
  try {
    const currentAccount = await account.get();

    return currentAccount;
  } catch (error: any) {
    throw new Error(error);
  }
}

// Get Current User
export async function getCurrentUser() {
  try {
    const currentAccount = await getAccount();
    if (!currentAccount) throw Error;

    const currentUser = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      [Query.equal("accountId", currentAccount.$id)]
    );

    if (!currentUser) throw Error;

    return currentUser.documents[0];
  } catch (error) {
    console.log(error + "ahmed3");
    return null;
  }
}

// Sign Out
export async function signOut() {
  try {
    const session = await account.deleteSession("current");

    return session;
  } catch (error: any) {
    throw new Error(error);
  }
}

// Get all categories
export async function getAllCategories() {
  try {
    const categories = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.categoriesCollectionId
    );

    return categories.documents.map((category) => {
      return {
        id: category.id,
        name: category.name,
        icon: category.icon,
        products: category.products,
      } as Category;
    });
  } catch (error: any) {
    throw new Error(error);
  }
}

// Get all categories
export async function getShopScreenCategories() {
  try {
    const categories = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.shopScreenCategoriesId
    );

    return categories.documents.map((category) => {
      return {
        id: category.id,
        name: category.name,
        icon: "",
        products: category.products,
      } as Category;
    });
  } catch (error: any) {
    throw new Error(error);
  }
}

// Get all products
export async function getAllProducts() {
  try {
    const products = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.productsCollectionId
    );

    return products.documents.map((product) => {
      return {
        id: product.id,
        title: product.title,
        description: product.description,
        images: product.images,
        price: product.price,
        rate: product.rate,
        numberOfRates: product.numberOfRates,
        category: product.categories,
        productSize: product.productSize,
      } as Product;
    }) as Product[];
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function unSaveProductToUser(product: Product) {
  try {
    // Fetch the user document based on the userId
    const user = await getCurrentUser();

    const userLovedProducts = user?.lovedProducts || [];

    // Fetch the loved product document based on the product id
    const lovedProduct = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.productsCollectionId,
      [Query.equal("id", product.id)]
    );

    if (lovedProduct.documents.length === 0) {
      throw new Error("Product not found");
    }

    const productId = lovedProduct.documents[0].$id;

    // Remove the product from the user's lovedProducts list
    const updatedLovedProducts = userLovedProducts.filter(
      (lovedProduct: any) => lovedProduct.$id !== productId
      // (lovedProduct) => lovedProduct.$id !== productId
    );

    // console.log(updatedLovedProducts);
    if (!user) {
      throw new Error("User not found");
    }

    const updatedUser = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      user.$id,
      {
        lovedProducts: updatedLovedProducts,
      }
    );

    return updatedUser;
  } catch (error: any) {
    console.error("Failed to remove product from user", error);
    throw new Error(error.message || "Failed to remove product");
  }
}

export async function saveProductToUser(product: Product) {
  try {
    // Fetch the user document based on the userId
    const user = await getCurrentUser();

    const userLovedProducts = user?.lovedProducts || [];

    const lovedproduct = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.productsCollectionId,
      [Query.equal("id", product.id)]
    );

    const productId = lovedproduct.documents[0].$id;
    // Update the user document with the new video
    const updatedLovedProducts = [
      ...userLovedProducts,
      {
        $id: productId,
      },
    ];

    if (!user) {
      throw new Error("User not found");
    }

    const updatedUser = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      user.$id,
      {
        lovedProducts: updatedLovedProducts,
      }
    );

    console.log(updatedUser, "Video added successfully");
    return updatedUser;
  } catch (error: any) {
    console.error("Failed to save video to user", error);
    throw new Error(error.message || "Failed to save video");
  }
}

export async function getUserLovedProducts() {
  try {
    // Fetch the user document based on the userId
    const user = await getCurrentUser();

    const userLovedProducts = user?.lovedProducts || [];

    return userLovedProducts.map((product: any) => {
      return {
        id: product.id,
        title: product.title,
        description: product.description,
        images: product.images,
        price: product.price,
        rate: product.rate,
        numberOfRates: product.numberOfRates,
        category: product.categories,
        productSize: product.productSize,
      } as Product;
    }) as Product[];
    // return userLovedProducts;
  } catch (error: any) {
    console.error("Failed to get saved videos for user", error);
    throw new Error(error.message || "Failed to get saved videos");
  }
}

export async function getShopNotifications() {
  try {
    const notifications = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.shopScreenNotificationsId
    );

    return notifications.documents.map((notification) => {
      return {
        title: notification.title,
        subTitle: notification.subTitle,
        products: notification.products,
      } as ShopScreenNotification;
    }) as ShopScreenNotification[];
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function createCart(cart: Cart, productId: string) {
  try {
    const newCart = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.cartId,
      ID.unique(),
      {
        product: productId,
        count: cart.count,
        size: cart.size,
      }
    );

    return newCart;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function saveProductToUserCart(product: Product, size?: string) {
  try {
    // Fetch the user document based on the userId

    const user = await getCurrentUser();

    if (!user) {
      throw new Error("User not found");
    }
    const userCarts = user?.cart || [];

    const productData = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.productsCollectionId,
      [Query.equal("id", product.id)]
    );

    const productId = productData.documents[0].$id;
    userCarts.forEach((cart: any) => {
      if (cart.product.$id === productId) {
        Alert.alert("Error", "Product already in cart");
        return;
      }
    });

    const cart = await createCart(
      {
        product: product,
        count: "1",
        size: size || "",
      },
      productId
    );

    // Update the user document with the new video
    const updatedUserCart = [
      ...userCarts,
      {
        $id: cart.$id,
      },
    ];

    const updatedUser = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      user.$id,
      {
        cart: updatedUserCart,
      }
    );

    // console.log(updatedUser, "Video added successfully");
    return updatedUser;
  } catch (error: any) {
    console.error("Failed to save video to user", error);
    throw new Error(error.message || "Failed to save video");
  }
}

export async function getUserCarts() {
  try {
    // Fetch the current user
    const user = await getCurrentUser();

    if (!user) {
      throw new Error("User not found");
    }

    const carts: any[] = [];

    const userCarts = user?.cart || [];

    // console.log(userCarts, "userCarts");
    // console.log(userCarts);
    // Fetch detailed product and category data for each product in the cart
    const cartWithProductsAndCategories = await Promise.all(
      userCarts.map(async (cartItem: any) => {
        // Fetch the product data
        const productData = await databases.getDocument(
          appwriteConfig.databaseId,
          appwriteConfig.productsCollectionId,
          cartItem.product.$id // Product ID from the cart
        );

        // Fetch the category for the product
        let categories: any[] = [];

        const categoriesPromises = productData.categories.map(
          (category: any) => {
            return databases.getDocument(
              appwriteConfig.databaseId,
              appwriteConfig.categoriesCollectionId,
              category.$id
            );
          }
        );

        const categoriesData = await Promise.all(categoriesPromises);

        categoriesData.forEach((categoryData) => {
          categories.push(categoryData);
        });

        carts.push({
          count: cartItem.count,
          size: cartItem.size,
          product: {
            id: productData.id,
            title: productData.title,
            description: productData.description,
            images: productData.images,
            price: productData.price,
            rate: productData.rate,
            numberOfRates: productData.numberOfRates,
            productSize: productData.productSize,
            category: categories.map((category) => {
              return {
                name: category.name,
                icon: category.icon,
              };
            }),
          },
        });
      })
    );

    return carts;
  } catch (error: any) {
    throw new Error(
      error.message || "Failed to fetch cart with products and categories"
    );
  }
}

export async function removeCartFromUser(product: Product) {
  try {
    // Fetch the current user
    const user = await getCurrentUser();

    if (!user) {
      throw new Error("User not found");
    }

    const userCarts = user?.cart || [];

    // console.log(userCarts, "userCarts");
    // Find the cart item with the given product ID

    console.log(product.id, "product");
    const cartItemToRemove = userCarts.find((cartItem: any) => {
      console.log(cartItem.product.id, "cartItem");
      if (cartItem.product.id === product.id) {
        return cartItem;
      }
    });

    console.log(cartItemToRemove, "cartItemToRemove");
    if (!cartItemToRemove) {
      throw new Error("Cart item not found");
    }

    // Remove the cart from the user's cart list
    const updatedUserCarts = userCarts.filter(
      (cartItem: any) => cartItem.product.id !== product.id
    );

    // Update the user's cart in the database
    const updatedUser = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      user.$id,
      {
        cart: updatedUserCarts,
      }
    );

    // Optionally, delete the cart from the database
    await databases.deleteDocument(
      appwriteConfig.databaseId,
      appwriteConfig.cartId,
      cartItemToRemove.$id
    );

    console.log(updatedUser, "Cart removed successfully");
    return updatedUser;
  } catch (error: any) {
    console.error("Failed to remove cart from user", error);
    throw new Error(error.message || "Failed to remove cart");
  }
}

export async function clearUserCart() {
  try {
    // Fetch the current user
    const user = await getCurrentUser();

    if (!user) {
      throw new Error("User not found");
    }

    const userCarts = user?.cart || [];

    if (userCarts.length === 0) {
      throw new Error("No items in the cart");
    }

    // Iterate through all cart items and delete them
    await Promise.all(
      userCarts.map(async (cartItem: any) => {
        // Delete the cart item from the database
        await databases.deleteDocument(
          appwriteConfig.databaseId,
          appwriteConfig.cartId,
          cartItem.$id // Cart document ID
        );
      })
    );

    // Update the user's cart to be empty
    const updatedUser = await databases.updateDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      user.$id,
      {
        cart: [],
      }
    );

    console.log("All cart items cleared successfully");
    return updatedUser;
  } catch (error: any) {
    console.error("Failed to clear user cart", error);
    throw new Error(error.message || "Failed to clear cart");
  }
}

// Upload File
export async function uploadFile(image: any) {
  if (!image) return;

  try {
    const uploadedFile = await storage.createFile(
      appwriteConfig.storageId,
      ID.unique(),
      image
    );

    const fileUrl = await getFilePreview(uploadedFile.$id);
    return fileUrl;
  } catch (error: any) {
    throw new Error(error);
  }
}
// Get File Preview
export async function getFilePreview(fileId: string) {
  let fileUrl;

  try {
    fileUrl = storage.getFilePreview(
      appwriteConfig.storageId,
      fileId,
      2000,
      2000,
      ImageGravity.Top,
      100
    );

    if (!fileUrl) throw Error;

    return fileUrl;
  } catch (error: any) {
    throw new Error(error);
  }
}
