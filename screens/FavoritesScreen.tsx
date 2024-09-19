import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import FavoriteProductCard from "@/components/FavoriteProductCard";
import useAppwrite from "@/lib/useAppwrite";
import { getUserLovedProducts } from "@/lib/appwrite";
import { Product } from "@/types/types";

const FavoritesScreen = () => {
  const {
    data: lovedProducts,
    refetch: refetchLovedProducts,
  }: { data: Product[]; refetch: () => void } =
    useAppwrite(getUserLovedProducts);

  const [productsToShow, setProductsToShow] = useState<Product[]>([]);

  useEffect(() => {
    // Check if categories and products exist before setting state
    if (lovedProducts.length > 0 && lovedProducts) {
      setProductsToShow(
        lovedProducts.map((product) => {
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
      );
    } else {
      setProductsToShow([]); // Provide an empty array if no products exist
    }
  }, [lovedProducts]);

  // const [isLovedProduct, setisLovedProduct] = useState(false);
  // useEffect(() => {
  //   // Check if categories and products exist before setting state
  //   if (lovedProducts.length > 0 && lovedProducts) {
  //     setisLovedProduct(
  //       lovedProducts
  //         .map((product) => {
  //           return product.id;
  //         })
  //         .includes(product.id)
  //     );
  //   } else {
  //     setisLovedProduct(false); // Provide an empty array if no products exist
  //   }
  // }, [lovedProducts]);

  console.log(productsToShow);
  return (
    <View className="flex-1  bg-mainBackground pt-4">
      <StatusBar barStyle="light-content" backgroundColor={"#0C0F14"} />
      <Header title="Favorites" />

      {/* <FavoriteProductCard
        product={{
          id: "1",
          title: "Electrical Product",
          price: "10000",
          images:
            "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg",
          description:
            "Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! ",
          rate: "4.5",
          numberOfRates: "6534",
          category: [
            {
              id: "1",
              name: "Electrical",
              icon: "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg",
            },
            {
              id: "2",
              name: "home",
              icon: "https://cdn.britannica.com/88/212888-050-6795342C/study-lamp-electrical-cord.jpg",
            },
          ],
          productSize: [
            {
              size: "250",
              unit: "gm",
              price: "10000",
            },
            {
              size: "500",
              unit: "gm",
              price: "10000",
            },
            {
              size: "750",
              unit: "gm",
              price: "10000",
            },
            {
              size: "1",
              unit: "kg",
              price: "10000",
            },
            {
              size: "1.25",
              unit: "kg",
              price: "10000",
            },
            {
              size: "1,5",
              unit: "kg",
              price: "10000",
            },
          ],
        }}
      /> */}
      <FlatList
        data={productsToShow}
        keyExtractor={(product) => product.id}
        // renderItem={(product) => <FavoriteProductCard product={product} />}
        renderItem={({ item }) => <FavoriteProductCard product={item} />}
      />
    </View>
  );
};

export default FavoritesScreen;
