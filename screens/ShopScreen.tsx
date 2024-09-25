import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import ElectricShopCategoriesNavList from "@/components/ElectricShopCategoriesNavList";
import ShopCategoryCard from "@/components/ShopCategoryCard";
import { getShopNotifications, getShopScreenCategories } from "@/lib/appwrite";
import useAppwrite from "@/lib/useAppwrite";
import { Category, Product, ShopScreenNotification } from "@/types/types";
import { shuffle } from "@/components/CategoriesList";
import { useDispatch } from "react-redux";
import { setShopScreenNotification } from "@/features/shopScreenNotificationSlice";
import Loading from "@/components/Loading";

const ShopScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();

  const {
    data: categories,
    loading: categoriesLoading,
    refetch: refetchCategories,
  }: { data: Category[]; refetch: () => void; loading: boolean } = useAppwrite(
    getShopScreenCategories
  );

  const {
    data: notification,
    loading: notificationLoading,
    refetch: refetchNotification,
  }: {
    data: ShopScreenNotification[];
    refetch: () => void;
    loading: boolean;
  } = useAppwrite(getShopNotifications);

  const [productsToShow, setProductsToShow] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(productsToShow.length === 0);

  const [notificationToShow, setNotificationToShow] =
    useState<ShopScreenNotification>({ title: "", subTitle: "", products: [] });

  useEffect(() => {
    if (notification.length > 0 && notification) {
      dispatch(setShopScreenNotification(notification));
      setNotificationToShow({
        title: notification[0].title,
        subTitle: notification[0].subTitle,
        products: notification[0].products,
      });
    } else {
      setNotificationToShow({ title: "", subTitle: "", products: [] });
    }
  }, [notification]);

  useEffect(() => {
    if (categories.length > 0 && categories) {
      setProductsToShow(
        shuffle(
          categories[0].products.map((product) => {
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
      setIsLoading(false);
    } else {
      setProductsToShow([]);
    }
  }, [categories]);

  if (categoriesLoading || notificationLoading || isLoading) {
    return (
      <View className="flex-1  bg-mainBackground">
        <Loading />
      </View>
    );
  }
  return (
    <View className="flex-1 bg-mainBackground pt-4 ">
      <StatusBar barStyle="light-content" backgroundColor={"#0C0F14"} />
      <Header title="Shop" />
      <View className="pt-6">
        <ElectricShopCategoriesNavList
          mainCategories={categories}
          selectedItem="Best Sellers"
          onChangeCategory={(selectedItem) => {
            // Provide an empty array if no products exist
            setProductsToShow([]);
            setProductsToShow(
              categories.filter((category) => category.name === selectedItem)[0]
                .products
            );
          }}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate("productsScreen")}
      >
        <View className="rounded-lg bg-primary content-center items-center mx-4 mt-2 py-6">
          <Text className="text-white font-semibold text-xl ">
            {notificationToShow.title}
          </Text>
          <Text className="text-white text-base">
            {notificationToShow.subTitle}
          </Text>
        </View>
      </TouchableOpacity>
      <FlatList
        data={productsToShow}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <ShopCategoryCard product={item} navigation={navigation} />;
        }}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View className="h-4" />}
        className="mx-4 pt-4 pb-4"
        ListFooterComponent={() => <View className="h-6" />}
      />
    </View>
  );
};

export default ShopScreen;

const styles = StyleSheet.create({});
