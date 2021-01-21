import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import IndexScreen from "./src/screens/IndexScreen";
import ShowScreen from "./src/screens/ShowScreen";
import NamingScreen from "./src/screens/NamingScreen";
import IngredientScreen from "./src/screens/IngredientScreen";

import { Provider } from "./src/context/RecipeContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen,
    Naming: NamingScreen,
    Ingredient: IngredientScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "My Recipes",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
