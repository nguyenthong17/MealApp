import { useLayoutEffect, useContext } from "react";
import { ScrollView, Text, StyleSheet, Image, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { MEALS } from "../data/data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import IconButton from "../components/IconButton";
import { addFavorite, removeFavorite } from "../store/redux/favorite";
import { add } from "react-native-reanimated";
// import { FavoriteContext } from "../store/context/favorite-context";

function MealDetailScreen({ route, navigation }) {
  // const favoriteMealsCtx = useContext(FavoriteContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeal.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const [meal] = MEALS.filter((mealItem) => mealItem.id === mealId);

  const mealIsFavorite = favoriteMealIds.includes(mealId);
  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  function changeFavoriteMeal() {
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton
          icon={mealIsFavorite ? "heart" : "heart-outline"}
          onPress={changeFavoriteMeal}
        />
      ),
    });
  }, [navigation, changeFavoriteMeal]);

  return (
    <ScrollView style={styles.screen}>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{meal.title}</Text>
      <MealDetails
        duration={meal.duration}
        affordability={meal.affordability}
        complexity={meal.complexity}
        textStyle={styles.textStyle}
      />
      <View style={styles.outerListContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={meal.ingredients}>-</List>
          <Subtitle>How to</Subtitle>
          <List data={meal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  textStyle: {
    color: "white",
  },
  outerListContainer: {
    width: "100%",
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
