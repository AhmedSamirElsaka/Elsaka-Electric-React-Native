import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import * as Icons from "react-native-heroicons/solid";

const ProductCardCount = ({ productQuantity }: { productQuantity: number }) => {
  const [quantity, setQuantity] = useState(productQuantity);
  return (
    <View className="flex-row  justify-between items-center">
      <TouchableOpacity
        onPress={() =>
          quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0)
        }
        activeOpacity={0.7}
      >
        <Icons.MinusIcon
          size={20}
          color={"white"}
          className="w-12 h-12 bg-primary rounded-lg p-4"
        />
      </TouchableOpacity>
      <View
        className="border-2 border-primary rounded-xl 
              items-center content-center bg-[#0C0F14] p-2 w-14 h-12"
      >
        <Text className="text-white text-lg" numberOfLines={1}>
          {quantity}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => setQuantity(quantity + 1)}
        activeOpacity={0.7}
      >
        <Icons.PlusIcon
          size={20}
          color={"white"}
          className="w-12 h-12 bg-primary rounded-lg p-4"
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProductCardCount;

const styles = StyleSheet.create({});
