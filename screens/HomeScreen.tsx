import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import CategoriesList, { shuffle } from "@/components/CategoriesList";

import BackIcon from "@/components/BackIcon";
import useAppwrite from "@/lib/useAppwrite";
import {
  getAllCategories,
  getAllProducts,
  getUserCarts,
  getUserLovedProducts,
  getUserOrders,
  uploadFile,
} from "@/lib/appwrite";
import { Cart, Category, Order, Product } from "@/types/types";
import HomeProductList from "@/components/HomeProductList";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, setProducts } from "@/features/productsSlice";
import { setLovedProducts } from "@/features/lovedProdcutsSlice";
import { setCarts } from "@/features/cartSlice";
import LottieView from "lottie-react-native";
import Loading from "@/components/Loading";
import { setOrders } from "@/features/orderSlice";
import { useGlobalContext } from "@/context/GlobalProvider";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);
  const productsRedux = useSelector(selectProducts).products;
  const { user }: any = useGlobalContext();
  const {
    data: categories,
    loading: categoriesLoading,
    refetch: refetchCategories,
  }: { data: Category[]; refetch: () => void; loading: boolean } = useAppwrite(
    getAllCategories
  );

  const {
    data: products,
    loading: productsLoading,
    refetch: refetchProducts,
  }: { data: Product[]; refetch: () => void; loading: boolean } = useAppwrite(
    getAllProducts
  );

  const {
    data: lovedProducts,
    loading: lovedProductsLoading,
    refetch: refetchLovedProducts,
  }: { data: Product[]; refetch: () => void; loading: boolean } = useAppwrite(
    getUserLovedProducts
  );

  const {
    data: userCarts,
    loading: userCartsLoading,
    refetch: refetchCarts,
  }: { data: Cart[]; refetch: () => void; loading: boolean } = useAppwrite(
    getUserCarts
  );

  const {
    data: userOrders,
    loading: userOrdersLoading,
    refetch: refetchOrders,
  }: { data: Order[]; refetch: () => void; loading: boolean } = useAppwrite(
    getUserOrders
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch, products]);

  useEffect(() => {
    dispatch(setLovedProducts(lovedProducts));
  }, [dispatch, lovedProducts]);

  useEffect(() => {
    dispatch(setCarts(userCarts));
  }, [dispatch, userCarts]);

  useEffect(() => {
    dispatch(setOrders(userOrders));
  }, [dispatch, userOrders]);

  useEffect(() => {
    if (productsRedux.length > 0 && productsRedux) {
      setProductsToShow(
        shuffle(
          productsRedux.map((product: Product) => {
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
  }, [productsRedux, dispatch]);

  useEffect(() => {
    refetchCategories();
    refetchProducts();
    refetchLovedProducts();
    refetchCarts();
    refetchOrders();
  }, [user]);

  if (
    lovedProductsLoading ||
    productsLoading ||
    categoriesLoading ||
    userCartsLoading ||
    userOrdersLoading
  ) {
    return (
      <View className="flex-1  bg-mainBackground">
        <Loading />
      </View>
    );
  }
  return (
    <View className="flex-1  bg-mainBackground pt-4 pb-4">
      <StatusBar
        barStyle="light-content"
        backgroundColor={"#0C0F14"}
        hidden={false}
      />
      <Header title="Home" />
      <ScrollView>
        <View className="flex-1  bg-mainBackground">
          <Text className="text-white font-bold text-xl pl-4 pr-16 mt-6">
            Find the best
            <Text className="text-primary"> Electrical Product</Text> for your
            home
          </Text>
          <View className="pt-6 px-4 mb-8">
            <SearchInput
              initialQuery={""}
              onSearchPress={(text) => {
                navigation.navigate("search" as never, { searchText: text });
              }}
            />
          </View>
          <View className="pl-4">
            <CategoriesList
              categories={categories}
              selectedItem="All"
              onChangeCategory={(selectedItem) => {
                setProductsToShow(
                  products.filter(
                    (product) =>
                      Array.isArray(product.category) &&
                      product.category.some((cat) => cat.name === selectedItem)
                  )
                );
              }}
            />
          </View>
          <HomeProductList
            title=""
            items={shuffle(productsToShow)}
            navigation={navigation}
          />
          <View className="mt-4">
            <HomeProductList
              title="New"
              items={shuffle(products)}
              navigation={navigation}
              isSeeAll={true}
            />
          </View>
          <View className="mt-4">
            <HomeProductList
              title="Sale"
              items={shuffle(products)}
              navigation={navigation}
              isSeeAll={true}
            />
          </View>
          <View className="mt-4">
            <HomeProductList
              title="Featured"
              items={shuffle(products)}
              navigation={navigation}
              isSeeAll={true}
            />
          </View>
          <View className="mt-4">
            <HomeProductList
              title="Trending"
              items={shuffle(products)}
              navigation={navigation}
              isSeeAll={true}
            />
          </View>
          <View className="mt-4">
            <HomeProductList
              title="Best Selling"
              items={shuffle(products)}
              navigation={navigation}
              isSeeAll={true}
            />
          </View>
          <View className="mt-4">
            <HomeProductList
              title="Top Rated"
              items={shuffle(products)}
              navigation={navigation}
              isSeeAll={true}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
