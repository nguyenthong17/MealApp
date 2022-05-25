import { useLayoutEffect } from "react";
import { View, FlatList, StyleSheet } from "react-native";

import { MEALS, CATEGORIES } from "../data/data";

import MealItem from "../components/MealItem";

function MealOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(catId)
  );

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

  useLayoutEffect(() => {
    const title = CATEGORIES.find((category) => category.id === catId).title;

    navigation.setOptions({ title });
  }, [catId, navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
