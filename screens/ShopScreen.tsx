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

const ShopScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();

  const {
    data: categories,
    refetch: refetchCategories,
  }: { data: Category[]; refetch: () => void } = useAppwrite(
    getShopScreenCategories
  );

  const {
    data: notification,
    refetch: refetchNotification,
  }: {
    data: ShopScreenNotification[];
    refetch: () => void;
  } = useAppwrite(getShopNotifications);

  const [productsToShow, setProductsToShow] = useState<Product[]>([]);
  const [notificationToShow, setNotificationToShow] =
    useState<ShopScreenNotification>({ title: "", subTitle: "", products: [] });

  // console.log(notification, "notification");
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

  // Store the products that are currently visible in the shop screen
  useEffect(() => {
    // Log the categories to the console for debugging purposes
    // Check if categories and products exist before setting state

    // When the categories change, update the products that are visible in the shop screen
    if (categories.length > 0 && categories) {
      setProductsToShow(
        shuffle(
          // Shuffle the products of the first category and save them to state
          categories[0].products.map((product) => {
            return {
              id: product.id,
              // Convert the product to the format that the shop screen expects
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
  }, [categories]);
  return (
    <View className="flex-1 bg-mainBackground pt-4 ">
      <StatusBar barStyle="light-content" backgroundColor={"#0C0F14"} />
      <Header title="Shop" />
      <View className="pt-4">
        <ElectricShopCategoriesNavList
          mainCategories={categories}
          selectedItem="Best Sellers"
          onChangeCategory={(selectedItem) => {
            // Provide an empty array if no products exist
            setProductsToShow([]);
            setProductsToShow(
              categories.filter((category) => category.name === selectedItem)[0]
                .products

              // Render the shop screen
            );
          }}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.push("productsScreen")}
      >
        <View className="rounded-lg bg-primary content-center items-center mx-4 mt-4 py-8">
          <Text className="text-white font-semibold text-3xl ">
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
