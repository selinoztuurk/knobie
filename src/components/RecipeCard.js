import React from "react";
import { Text, StyleSheet, ImageBackground, View } from "react-native";

const RecipeCard = ({ recipe }) => {
  return (
    <ImageBackground
      style={styles.imageStyle}
      imageStyle={{ borderRadius: 16 }}
      source={require("../../assets/pictures/cinnamon-swirl.jpg")}
    >
      <View style={styles.view}>
        <Text style={styles.title}>{recipe.title}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  view: {
    position: "absolute",
    bottom: -10,
    right: -10,
    width: "auto",
    borderRadius: 8,
    backgroundColor: "gray",
    flexDirection: "row",
    alignItems: "stretch",
  },
  title: {
    fontSize: 18,
    padding: 5,
    color: "white",
  },
  searchIcon: {
    paddingHorizontal: 20,
    color: "gray",
  },
  plusIcon: {
    paddingVertical: 20,
    color: "gray",
    alignSelf: "center",
  },
  imageStyle: {
    width: 300,
    height: 150,
    borderRadius: 4,
    shadowColor: "black",
    shadowOffset: { height: 3 },
    shadowOpacity: 0.3,
  },
});

export default RecipeCard;
