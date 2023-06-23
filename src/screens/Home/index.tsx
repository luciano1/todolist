import { useNavigation } from "@react-navigation/native";
import { useColorScheme } from "nativewind";
import React from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";
import { RootStackNavigationProp } from "../../routes/app.routes";

export default function Home() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { navigate } = useNavigation<RootStackNavigationProp>();
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-primary">
      <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} className="mb-3"/>
      <Text className="font-regularRoboto">Teste Tema</Text>
      <TouchableOpacity onPress={() => navigate("firstRoute")}>
        <View className="justify-center items-center bg-green-700 w-24 h-10 rounded mt-4">
          <Text className="text-white font-boldRoboto">Next Screen</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
