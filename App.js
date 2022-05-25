import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screen
import CategoryScreen from "./screens/CategoryScreen";
import MealOverviewScreen from "./screens/MealOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealCategories"
            component={CategoryScreen}
            options={{
              title: "All Categories",
            }}
          />
          <Stack.Screen
            name="MealOverviewScreen"
            component={MealOverviewScreen}
            // options={({ route, navigation }) => {
            //   const title = route.params.title;
            //   return {
            //     title,
            //   };
            // }}
          />
          <Stack.Screen name="MealDetail" component={MealDetailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({});
