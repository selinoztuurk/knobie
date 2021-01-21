import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/RecipeContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const recipe = state.find(
    (recipe) => recipe.id === navigation.getParam("id")
  );

  return <Text>{recipe.title}</Text>;
};

const styles = StyleSheet.create({});

export default ShowScreen;
