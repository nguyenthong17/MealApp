import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/data";

function renderCategoryItem({ item }) {
  return <CategoryGridTile title={item.title} color={item.color} />;
}

function CategoryScreen() {
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
