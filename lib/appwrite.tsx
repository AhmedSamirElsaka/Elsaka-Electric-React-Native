import { Category, Product } from "@/types/types";
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
  databaseId: "66d1d90e003cb70104ce",
  userCollectionId: "66d1d931003d64508125",
  categoriesCollectionId: "66e6b67f003cf43f1fe0",
  productsCollectionId: "66e7bbb6003830f8ff6d",
  shopScreenCategories: "66ead2c8002fdbdf4d8d",
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

    // console.log(currentUser, "currentUser");
    return currentUser.documents[0];
  } catch (error) {
    console.log(error);
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
      appwriteConfig.shopScreenCategories
    );

    console.log(categories.documents);
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
