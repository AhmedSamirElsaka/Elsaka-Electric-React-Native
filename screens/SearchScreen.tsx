import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { StatusBar } from "react-native";
import Header from "@/components/Header";
import SearchInput from "@/components/SearchInput";
import { useRoute } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { Product } from "@/types/types";
import { useSelector } from "react-redux";
import { selectProducts } from "@/features/productsSlice";
import * as Icons from "react-native-heroicons/solid";
import ShopProductList from "@/components/ShopProductList";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { shuffle } from "@/components/CategoriesList";
import Loading from "@/components/Loading";

const SearchScreen = ({ navigation }: any) => {
  const routed = useRoute();
  const PassedSearchText: string = (routed?.params as { searchText: string })
    .searchText;

  const [searchText, setSearchText] = useState(PassedSearchText || "");
  const [filerSelectedItem, setFilterSelectedItem] = useState("Popular");
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [isHorizontalList, setIsHorizontalList] = useState(false);

  const [productsToShow, setProductsToShow] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(productsToShow.length === 0);

  const productsRedux =
    useSelector(selectProducts).products || ([] as Product[]);
  const handleSheetChanges = useCallback((index: number) => {}, []);

  const filterItemSelectedHandler = (selectedItem: string) => {
    setProductsToShow(shuffle(productsToShow));
    bottomSheetRef.current?.close();
    // console.log(selectedItem);
  };

  useEffect(() => {
    setProductsToShow(
      productsRedux.filter((product: Product) =>
        product.title.includes(searchText)
      )
    );
    setIsLoading(false);
  }, [productsRedux, searchText]);

  if (isLoading) {
    return (
      <View className="flex-1  bg-mainBackground">
        <Loading />
      </View>
    );
  }
  return (
    <View className="bg-mainBackground - flex-1">
      <StatusBar
        barStyle="light-content"
        backgroundColor={"#0C0F14"}
        hidden={false}
      />

      <Header
        title="Search"
        isBackIconRequired={true}
        onBackIconPress={() => navigation.goBack()}
      />

      <View className="pt-4 px-6 mb-8">
        <SearchInput
          initialQuery={searchText}
          onTextChange={(text) => {
            setSearchText(text);
          }}
          isFocused={true}
        />
      </View>

      <View className="pt-4 flex-row justify-between px-4 pb-4">
        <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
          <View className="flex-row space-x-2">
            <Icon name="filter" type="ionicon" color="white" size={24} />
            <Text className="text-white  text-base ">Filters</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            bottomSheetRef.current?.expand();
          }}
          activeOpacity={0.7}
        >
          <View className="flex-row space-x-2">
            <Icons.ArrowsUpDownIcon size={24} color="white" />
            <Text className="text-white  text-base ">Popular</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setIsHorizontalList(!isHorizontalList);
          }}
          activeOpacity={0.7}
        >
          {isHorizontalList ? (
            <Icon
              name="view-module"
              type="material-icons"
              color="white"
              size={24}
            />
          ) : (
            <Icon
              name="view-list"
              type="material-icons"
              color="white"
              size={24}
            />
          )}
        </TouchableOpacity>
      </View>

      <ShopProductList
        products={productsToShow}
        isHorizontal={isHorizontalList}
        navigation={navigation}
      />
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={[380]}
        index={-1}
        enablePanDownToClose
        backgroundStyle={{ backgroundColor: "#2B2D31" }}
        handleIndicatorStyle={{ backgroundColor: "white" }}
        handleStyle={{ borderRadius: 30 }}
        containerHeight={500}
      >
        <BottomSheetView className="bg-red flex-1 opacity-100">
          <Text className="text-white text-center text-xl font-semibold">
            Sort by
          </Text>
          <FlatList
            data={[
              "Popular",
              "Newest",
              "Customer review",
              "Price: lowest to high",
              "Price: highest to low",
            ]}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setFilterSelectedItem(item);
                  filterItemSelectedHandler(item);
                }}
                activeOpacity={0.5}
              >
                <Text
                  className={`text-white text-lg p-4 ${
                    item === filerSelectedItem ? "bg-primary" : ""
                  } `}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
            className=" pt-4"
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
