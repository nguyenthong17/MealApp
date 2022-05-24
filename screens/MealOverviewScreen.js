import { View, FlatList, StyleSheet } from "react-native";

import { MEALS } from "../data/data";

import MealItem from "../components/MealItem";

function MealOverviewScreen({ route }) {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((mealItem) =>
    mealItem.categoryIds.includes(catId)
  );

  function renderMealItem({ item }) {
    return <MealItem title={item.title} imageUrl={item.imageUrl} />;
  }

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
