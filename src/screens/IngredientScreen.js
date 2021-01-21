import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/RecipeContext";

const IngredientScreen = ({ navigation }) => {
  const [ingredientList, setIngredientList] = useState([]);

  return (
    <View>
      <Text>IngredientScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IngredientScreen;
