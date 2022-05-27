import { StyleSheet, FlatList, View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import MealItem from "../MealItem";

export default function MealList({ data }) {
  const navigation = useNavigation();

  function renderMealItem({ item }) {
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      duration: item.duration,
      complexity: item.complexity,
    };

    function mealPressHandler() {
      navigation.navigate("MealDetail", { mealId: item.id });
    }
    return <MealItem {...mealItemProps} onPress={mealPressHandler} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
