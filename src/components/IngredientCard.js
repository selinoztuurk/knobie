import React from "react";
import {
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  View,
  Dimensions,
} from "react-native";

const IngredientCard = ({ ingredient }) => {
  return (
    <View style={styles.cardView}>
      <View style={styles.imageView}>
        <Image style={styles.imageStyle} source={ingredient.image} />
      </View>
      <Text style={styles.title}>{ingredient.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    borderWidth: 8,
    borderRadius: 36,
    borderColor: "lightgray",
    shadowColor: "gray",
    shadowOffset: { height: 1 },
    shadowOpacity: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    padding: 5,
    color: "gray",
  },
  searchIcon: {
    paddingHorizontal: 20,
    color: "lightgray",
  },
  imageStyle: {
    width: Dimensions.get("window").width / 5,
    height: Dimensions.get("window").width / 4,
    resizeMode: "contain",
  },
});

export default IngredientCard;
