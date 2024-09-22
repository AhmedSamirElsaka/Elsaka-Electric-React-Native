import {
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
} from "@/lib/appwrite";
import { Cart, Category, Product } from "@/types/types";
import HomeProductList from "@/components/HomeProductList";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts, setProducts } from "@/features/productsSlice";
import { setLovedProducts } from "@/features/lovedProdcutsSlice";
import { setCarts } from "@/features/cartSlice";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const {
    data: categories,
    refetch: refetchCategories,
  }: { data: Category[]; refetch: () => void } = useAppwrite(getAllCategories);

  const {
    data: products,
    refetch: refetchProducts,
  }: { data: Product[]; refetch: () => void } = useAppwrite(getAllProducts);

  const {
    data: lovedProducts,
    refetch: refetchLovedProducts,
  }: { data: Product[]; refetch: () => void } =
    useAppwrite(getUserLovedProducts);

  const {
    data: userCarts,
    refetch: refetchCarts,
  }: { data: Cart[]; refetch: () => void } = useAppwrite(getUserCarts);

  const dispatch = useDispatch();

  // console.log(userCarts, "userCarts");
  // Check if categories are loaded before accessing them
  const [productsToShow, setProductsToShow] = useState<Product[]>([]);

  useEffect(() => {
    dispatch(setProducts(products));
  }, [dispatch, products]);

  useEffect(() => {
    dispatch(setLovedProducts(lovedProducts));
  }, [dispatch, lovedProducts]);

  useEffect(() => {
    dispatch(setCarts(userCarts));
  }, [dispatch, userCarts]);

  const productsRedux = useSelector(selectProducts).products;

  useEffect(() => {
    // Check if categories and products exist before setting state
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

  return (
    <View className="flex-1  bg-mainBackground pt-4 pb-4">
      <StatusBar barStyle="light-content" backgroundColor={"#0C0F14"} />
      <Header title="Home" />
      <ScrollView>
        <View className="flex-1  bg-mainBackground">
          <Text className="text-white font-bold text-2xl pl-8 pr-12 pt-4">
            Find the best
            <Text className="text-primary"> Electrical Product</Text> for your
            home
          </Text>

          <View className="pt-8 px-6 mb-8">
            <SearchInput initialQuery={""} />
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
