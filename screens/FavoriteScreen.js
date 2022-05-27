import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { useSelector } from "react-redux";

import MealList from "../components/MealDetails/MealList";
import { MEALS } from "../data/data";
// import { FavoriteContext } from "../store/context/favorite-context";

export default function FavoriteScreen() {
  // const favoriteMealCtx = useContext(FavoriteContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeal.ids);

  // const mealIdList = favoriteMealCtx.ids;

  // const favMealList = mealIdList.map((id) =>
  //   MEALS.find((meal) => meal.id === id)
  // );
  const favMealList = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

  return <MealList data={favMealList} />;
}

const styles = StyleSheet.create({});
