import { useState } from "react";
import { View, TouchableOpacity, Image, TextInput, Alert } from "react-native";

import * as Icons from "react-native-heroicons/solid";
// import { icons } from "../constants";

const SearchInput = ({
  initialQuery,
  onTextChange = () => {},
  isFocused = false,
  onSearchPress = () => {},
}: {
  initialQuery: string;
  onTextChange?: (text: string) => void;
  isFocused?: boolean;
  onSearchPress?: (text: string) => void;
}) => {
  //   const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");

  return (
    <View className="flex flex-row items-center space-x-4 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={query}
        placeholder="Search an electrical product"
        placeholderTextColor="#CDCDE0"
        onChangeText={(e) => {
          onTextChange(e);
          setQuery(e);
        }}
        autoFocus={isFocused}
      />

      <TouchableOpacity
        onPress={() => {
          if (query === "") {
            return Alert.alert(
              "Missing Query",
              "Please input something to search results across database"
            );
          } else {
            onSearchPress(query);
          }
        }}
      >
        <Icons.MagnifyingGlassIcon color={"#CDCDE0"} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
