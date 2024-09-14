import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Product } from "@/types/types";
import ReviewCard from "./ReviewCard";
import { Icon } from "@rneui/themed";

const ProductReviewsSection = ({ data }: { data: Product[] }) => {
  const [isReviewsWithPhotoShown, setIsReviewsWithPhotoShown] = useState(false);
  return (
    <View>
      <View className="px-6 pt-10 flex-row justify-between">
        <Text className="text-white font-bold text-2xl ">20 Reviews</Text>
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={() => {
              setIsReviewsWithPhotoShown(!isReviewsWithPhotoShown);
            }}
            activeOpacity={0.7}
          >
            {isReviewsWithPhotoShown ? (
              <Icon
                name="check-box"
                type="material"
                color="#D17842"
                size={26}
              />
            ) : (
              <Icon
                name="check-box-outline-blank"
                type="material"
                color="#D17842"
                size={26}
              />
            )}
          </TouchableOpacity>
          <Text className="text-white ml-2 text-base">With Photo</Text>
        </View>
      </View>
      {data.map((item) => (
        <ReviewCard
          isWithPhotos={isReviewsWithPhotoShown}
          key={item.id}
          product={item}
        />
      ))}
    </View>
  );
};

export default ProductReviewsSection;

const styles = StyleSheet.create({});
