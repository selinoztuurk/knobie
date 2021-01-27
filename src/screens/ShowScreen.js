import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { Feather, AntDesign } from "@expo/vector-icons";
import { Context } from "../context/RecipeContext";
import { ceil } from "react-native-reanimated";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);

  const recipe = state.find(
    (recipe) => recipe.id === navigation.getParam("id")
  );

  return (
    <View>
      <Text style={styles.title}>{recipe.title}</Text>
      <View style={styles.imageViewSyle}>
        <Image
          style={styles.imageStyle}
          source={require("../../assets/pictures/cinnamon-swirl.jpg")}
        />
      </View>
      <Text
        style={{
          ...styles.title,
          alignSelf: "flex-start",
          paddingLeft: 20,
          color: "orange",
        }}
      >
        Description
      </Text>
      <Text style={styles.description}>{recipe.description}</Text>
      <Text
        style={{
          ...styles.title,
          alignSelf: "flex-start",
          paddingLeft: 20,
          color: "orange",
        }}
      >
        Ingredients
      </Text>
      <FlatList
        data={recipe.ingredients}
        keyExtractor={(ingredient) => ingredient}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <View style={styles.row}>
                <Text>{item}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  trashIcon: {
    fontSize: 24,
    color: "gray",
  },
  title: {
    fontSize: 24,
    color: "gray",
    alignSelf: "center",
    paddingVertical: 15,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    paddingHorizontal: 20,
    color: "gray",
  },
  imageViewSyle: {
    alignSelf: "center",
    paddingBottom: 20,
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  imageStyle: {
    width: Dimensions.get("window").width - 40,
    height: 170,
    borderRadius: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
});

export default ShowScreen;
