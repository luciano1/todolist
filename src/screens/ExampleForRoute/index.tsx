import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import { RootStackNavigationProp } from "../../routes/app.routes";
import AntDesign from "@expo/vector-icons/AntDesign";
export default function ExampleForRoute() {
  const Navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View className="flex-1 items-center justify-center bg-white bg-primary">
      <Text className="font-mediumRoboto text-xl text-white">Segunda Tela</Text>
      <TouchableOpacity onPress={() => Navigation.goBack()}>
        <View className="justify-center items-center bg-green-700 w-24 h-10 rounded mt-4">
          <AntDesign name="arrowleft" size={25} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}
