import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Context } from "../context/RecipeContext";
import IngredientCard from "../components/IngredientCard";
import ingredients from "../../assets/database/ingredients";

const ingredientList = ingredients;

const IngredientScreen = ({ navigation }) => {
  const { state, addRecipe } = useContext(Context);
  const [ingredients, setIngredients] = useState([]);

  const title = navigation.getParam("title");
  const description = navigation.getParam("description");
  const category = navigation.getParam("category");

  return (
    <View style={styles.mainView}>
      <FlatList
        data={ingredientList}
        numColumns={2}
        keyExtractor={(ingredient) => ingredient.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                const getIngredients = () => {
                  var ingredients = [];
                  for (key in Object.keys(item.content)) {
                    ingredients = [...ingredients, item.content[key].title];
                  }
                  return ingredients;
                };
                const ingredients = getIngredients();
                navigation.navigate("IngredientSelection", {
                  content: ingredients,
                });
              }}
            >
              <View style={styles.row}>
                <IngredientCard ingredient={item} />
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Button
        title="Add Recipe"
        onPress={() => {
          addRecipe(title, description, ingredients, category, () => {
            navigation.navigate("Index");
          });
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "space-between",
    alignSelf: "center",
  },
  row: {
    width: Dimensions.get("window").width / 2,
    paddingHorizontal: Dimensions.get("window").width / 20,
    paddingVertical: Dimensions.get("window").width / 25,
  },
});

export default IngredientScreen;
