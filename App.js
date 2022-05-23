import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screen
import CategoryScreen from "./screens/CategoryScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="MealCategories" component={CategoryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({});
