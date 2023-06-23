import React from "react";
import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <ActivityIndicator color="white" />
    </View>
  );
}
