import { useLayoutEffect } from "react";
import { ScrollView, Text, StyleSheet, Image, View } from "react-native";

import { MEALS } from "../data/data";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const [meal] = MEALS.filter((mealItem) => mealItem.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({ title: meal.title });
  }, [navigation]);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View>
        <Text>Ingreditens:</Text>
        {meal.ingredients.map((ingredient, index) => {
          return <Text key={index}>- {ingredient}</Text>;
        })}
      </View>
      <View>
        <Text>How to:</Text>
        {meal.steps.map((step, index) => (
          <Text key={index}>
            Step {index + 1} : {step}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
});
