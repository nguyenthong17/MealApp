import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/data";

function CategoryScreen({ navigation }) {
  function renderCategoryItem({ item }) {
    function pressHandler() {
      navigation.navigate("MealOverview", {
        categoryId: item.id,
        title: item.title,
      });
    }
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoryScreen;
