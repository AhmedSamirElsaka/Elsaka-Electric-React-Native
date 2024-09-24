import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
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
  uploadFile,
} from "@/lib/appwrite";
import { Cart, Category, Product } from "@/types/types";
import HomeProductList from "@/components/HomeProductList";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, setProducts } from "@/features/productsSlice";
import { setLovedProducts } from "@/features/lovedProdcutsSlice";
import { setCarts } from "@/features/cartSlice";
import LottieView from "lottie-react-native";
import Loading from "@/components/Loading";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);
  const productsRedux = useSelector(selectProducts).products;

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

  // useEffect(() => {
  //   if (categories && products && lovedProducts && userCarts) {
  //     setIsLoading(false);
  //   }
  // }, [categories, products, lovedProducts, userCarts]);

  if (
    lovedProductsLoading ||
    productsLoading ||
    categoriesLoading ||
    userCartsLoading
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
          <Text className="text-white font-bold text-2xl pl-8 pr-12 pt-4">
            Find the best
            <Text className="text-primary"> Electrical Product</Text> for your
            home
          </Text>

          <View className="pt-8 px-6 mb-8">
            <SearchInput
              initialQuery={""}
              onSearchPress={(text) => {
                navigation.navigate("search" as never, { searchText: text });
              }}
            />
          </View>

          <View className="px-6">
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
          <HomeProductList
            title="New"
            items={shuffle(products)}
            navigation={navigation}
          />
          <HomeProductList
            title="Sale"
            items={shuffle(products)}
            navigation={navigation}
          />
          <HomeProductList
            title="Featured"
            items={shuffle(products)}
            navigation={navigation}
          />
          <HomeProductList
            title="Trending"
            items={shuffle(products)}
            navigation={navigation}
          />
          <HomeProductList
            title="Best Selling"
            items={shuffle(products)}
            navigation={navigation}
          />
          <HomeProductList
            title="Top Rated"
            items={shuffle(products)}
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
