import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { MEALS, CATEGORIES } from "../data/data";

import MealItem from "../components/MealItem";
import MealList from "../components/MealDetails/MealList";

function MealOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(catId)
  );

  useLayoutEffect(() => {
    const title = CATEGORIES.find((category) => category.id === catId).title;

    navigation.setOptions({ title });
  }, [catId, navigation]);

  return <MealList data={displayMeals} />;
}

export default MealOverviewScreen;

const styles = StyleSheet.create({});
