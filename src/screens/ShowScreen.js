import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";

import { Feather, AntDesign } from "@expo/vector-icons";
import { Context } from "../context/RecipeContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const recipe = state.find(
    (recipe) => recipe.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text>{recipe.title}</Text>
      <Text>{recipe.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  trashIcon: {
    fontSize: 24,
    color: "gray",
  },
});

export default ShowScreen;
