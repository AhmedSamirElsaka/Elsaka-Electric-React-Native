import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import BackIcon from "../components/BackIcon";
import LoveIcon from "../components/LoveIcon";
import { Product } from "@/types/types";
import * as Icons from "react-native-heroicons/solid";
import CategoryIcon from "../components/CategoryIcon";
import ProductSizeComponent from "../components/ProductSizeComponent";
import CustomButton from "../components/CustomButton";
import ProductCardCount from "@/components/ProductCardCount";
import HomeProductCard from "@/components/HomeProductCard";
import { Icon } from "@rneui/themed";
import ReviewCard from "@/components/ReviewCard";
import ProductReviewsSection from "@/components/ProductReviewsSection";
import ProductRatingSection from "@/components/ProductRatingSection";
import { useRoute } from "@react-navigation/native";
import useAppwrite from "@/lib/useAppwrite";
import {
  getAllProducts,
  getUserLovedProducts,
  saveProductToUser,
  saveProductToUserCart,
  unSaveProductToUser,
} from "@/lib/appwrite";
import { shuffle } from "@/components/CategoriesList";
import { useDispatch, useSelector } from "react-redux";
import {
  addLovedProduct,
  removeLovedProduct,
  selectLovedProducts,
} from "@/features/lovedProdcutsSlice";
import { addCart } from "@/features/cartSlice";
import Loading from "@/components/Loading";

const ProductDetailsScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) => {
  const routed = useRoute();
  const product: Product = (routed?.params as { productDetails: Product })
    .productDetails;
  const dispatch = useDispatch();

  const [isReviewsWithPhotoShown, setIsReviewsWithPhotoShown] = useState(true);

  const {
    data: products,
    loading: productsLoading,
    refetch: refetchProducts,
  }: { data: Product[]; refetch: () => void; loading: boolean } = useAppwrite(
    getAllProducts
  );

  const [productsToShow, setProductsToShow] = useState<Product[]>([]);

  const lovedProducts = useSelector(selectLovedProducts);

  const [isLovedProduct, setisLovedProduct] = useState(false);
  useEffect(() => {
    if (lovedProducts.length > 0 && lovedProducts) {
      setisLovedProduct(
        lovedProducts
          .map((product) => {
            return product.id;
          })
          .includes(product.id)
      );
    } else {
      setisLovedProduct(false);
    }
  }, [lovedProducts]);

  useEffect(() => {
    if (products.length > 0 && products) {
      setProductsToShow(
        shuffle(
          products.map((product) => {
            return {
              id: product.id,
              title: product.title,
              description: product.description,
              images: product.images,
              price: product.price,
              rate: product.rate,
              numberOfRates: product.numberOfRates,
              category: product.category,
              productSize: product.productSize,
            };
          })
        )
      );
    } else {
      setProductsToShow([]); // Provide an empty array if no products exist
    }
  }, [products]);

  const showToast = (message: string) => {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  };

  const saveProductToUserHandler = async () => {
    dispatch(addLovedProduct(product));
    await saveProductToUser(product);
    showToast("Product saved to favorites");
  };

  const unSaveProductToUserHandler = async () => {
    dispatch(removeLovedProduct(product));
    await unSaveProductToUser(product);
    showToast("Product removed from favorites");
  };
  if (productsLoading) {
    return (
      <View className="flex-1  bg-mainBackground">
        <Loading />
      </View>
    );
  }
  return (
    <View className="flex-1 bg-mainBackground">
      <StatusBar barStyle="light-content" hidden={true} translucent />
      <View className="flex-row justify-between px-6 content-center z-50 mt-8">
        <BackIcon
          onPress={() => {
            navigation.goBack();
          }}
        />
        <LoveIcon
          onPress={() => {
            if (isLovedProduct) {
              unSaveProductToUserHandler();
            } else {
              saveProductToUserHandler();
            }
          }}
          isPressed={isLovedProduct}
        />
      </View>

      <ScrollView className="w-full h-[60vh] -mt-20">
        <FlatList
          data={product.images}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <View key={item} className="flex-1">
              <Image
                source={{
                  uri: item,
                }}
                className="w-[50vh] h-full"
                resizeMode="cover"
              />
            </View>
          )}
          className="w-full h-[60vh] -mt-20"
          horizontal
        />

        <View className="h-40 bg-mainBackground -mt-40 opacity-[0.7] rounded-tr-3xl rounded-tl-3xl flex-row">
          <View className="px-4 flex-1">
            <Text
              className="text-white font-bold text-lg pt-4"
              numberOfLines={2}
            >
              {product.title}
            </Text>
            <Text className="text-gray-300  text-sm pt-2" numberOfLines={1}>
              {product.description}
            </Text>
            <View className="flex-row items-center pt-4 space-x-2">
              <Icons.StarIcon size={24} color={"#D17842"} />
              <Text className=" text-white text-xl font-bold">
                {product.rate}
              </Text>
              <Text className=" text-gray-300 text-lg">
                ({product.numberOfRates})
              </Text>
            </View>
          </View>
          <View className=" flex-row justify-between pl-2 pr-4 pt-4">
            {product.category
              ?.filter((element) => element.name != "All")
              .map((element) => (
                <View className="mr-2" key={element.id}>
                  <CategoryIcon category={element} key={element.id} />
                </View>
              ))}
          </View>
        </View>
        <View className="pb-4">
          <Text className="text-white font-bold text-lg px-6 pt-4">
            Description
          </Text>
          <Text
            className="text-gray-300 px-6 pt-2 text-base"
            ellipsizeMode="tail"
            numberOfLines={6}
          >
            {product.description}
          </Text>

          {product.productSize && product.productSize.length > 0 && (
            <View>
              <Text className="text-white font-bold text-lg px-6 pt-6">
                Size
              </Text>

              <View className="px-6 pt-4">
                <FlatList
                  data={product.productSize}
                  renderItem={({ item }) => (
                    <ProductSizeComponent productSize={item} />
                  )}
                  keyExtractor={(item) => item.size}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => <View className="w-6" />}
                />
              </View>
            </View>
          )}
          <ProductRatingSection product={product} />
          <Text className="text-white font-bold text-2xl px-6 pt-8">
            You can also like this
          </Text>

          <FlatList
            data={shuffle(productsToShow)}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return <HomeProductCard product={item} navigation={navigation} />;
            }}
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View className="w-4" />}
            className="ml-4 pt-4"
            horizontal
          />
          <ProductReviewsSection data={productsToShow} />
        </View>
      </ScrollView>

      <TouchableOpacity
        className="items-end bg-[#fff0] -mt-12"
        onPress={() => {
          navigation.push("writeReview");
        }}
      >
        <View className="px-4 py-4 bg-primary rounded-full w-44 flex-row space-x-2 items-center content-center">
          <Icons.PencilIcon size={20} color={"#FFFFFF"} />
          <Text className="text-white font-bold text-center text-sm">
            Write A Review
          </Text>
        </View>
      </TouchableOpacity>
      <View className="flex-row  pt-2 justify-between mb-4">
        <View className="justify-center items-center pr-6  pl-6">
          <Text className="text-white font-bold text-lg ">Price</Text>
          <Text className="text-white font-bold text-lg text-center">
            <Text className="text-primary text-base">EGP </Text>
            {product.price}
          </Text>
        </View>
        <CustomButton
          title="Add To Cart"
          handlePress={() => {
            saveProductToUserCart(product);
            dispatch(addCart(product));
          }}
          textStyles="text-white text-lg text-bold"
          containerStyles="bg-primary flex-1 mr-4  min-h-[30px]"
        />
      </View>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
