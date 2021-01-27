import React from "react";
import { Text, StyleSheet, ImageBackground, View, Image } from "react-native";

const RecipeCard = ({ recipe }) => {
  return (
    <ImageBackground
      style={styles.imageStyle}
      imageStyle={{ borderRadius: 16 }}
      source={require("../../assets/pictures/cinnamon-swirl.jpg")}
    >
      <View style={{ ...styles.attributeView, left: 10 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.attributeIcon}
            source={require("../../assets/icons/seasonality.png")}
          />
          <Text style={{ ...styles.title, paddingLeft: 25 }}>4.5</Text>
        </View>
      </View>
      <View style={{ ...styles.attributeView, left: 92.5 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.attributeIcon}
            source={require("../../assets/icons/cost.png")}
          />
          <Text style={{ ...styles.title, paddingLeft: 25 }}>4.5</Text>
        </View>
      </View>
      <View style={{ ...styles.attributeView, left: 173.75 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.attributeIcon}
            source={require("../../assets/icons/locality.png")}
          />
          <Text style={{ ...styles.title, paddingLeft: 25 }}>4.5</Text>
        </View>
      </View>
      <View style={{ ...styles.attributeView, left: 255 }}>
        <View style={{ flexDirection: "row" }}>
          <Image
            style={styles.attributeIcon}
            source={require("../../assets/icons/frugality.png")}
          />
          <Text style={{ ...styles.title, paddingLeft: 25 }}>4.5</Text>
        </View>
      </View>
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
    backgroundColor: "lightgray",
    flexDirection: "row",
    alignItems: "stretch",
  },
  title: {
    fontSize: 18,
    padding: 5,
    color: "gray",
  },
  attributeView: {
    position: "absolute",
    bottom: 155,
    width: "auto",
    borderRadius: 8,
    backgroundColor: "lightgray",
    flex: 1,
    flexDirection: "row",
  },
  attributeIcon: {
    width: 40,
    height: 40,
    position: "absolute",
    left: -20,
    alignSelf: "center",
  },
  searchIcon: {
    paddingHorizontal: 20,
    color: "lightgray",
  },
  plusIcon: {
    paddingVertical: 20,
    color: "lightgray",
    alignSelf: "center",
  },
  imageStyle: {
    width: 300,
    height: 170,
    borderRadius: 4,
    shadowColor: "black",
    shadowOffset: { height: 3 },
    shadowOpacity: 0.3,
  },
});

export default RecipeCard;
