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
import { AntDesign } from "@expo/vector-icons";

const categoryList = [
  "Breakfast Dishes",
  "Appetizers",
  "Main Dishes",
  "Side Dishes",
  "Soups",
  "Salads",
  "Dessert",
  "Sauces, Dips & Spreads",
  "Holiday Foods",
];

const CategoryScreen = ({ navigation }) => {
  const title = navigation.getParam("title");
  const description = navigation.getParam("description");

  const [categorySelected, setCategorySelected] = useState({});

  useEffect(() => {
    for (category in categoryList) {
      setCategorySelected({
        ...categorySelected,
        category: false,
      });
    }
  }, []);

  return (
    <View>
      <Text style={styles.header}>Types of Meal</Text>
      <FlatList
        data={categoryList}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log(item + " Category pressed");
                setCategorySelected({
                  ...categorySelected,
                  [item]: !categorySelected[item],
                });
              }}
            >
              <View style={styles.row}>
                <Text style={styles.title}>{item}</Text>
                {categorySelected[item] ? (
                  <AntDesign name="check" size={16} color="gray" />
                ) : null}
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          const getCategory = () => {
            var category = [];
            for (key in categorySelected) {
              if (categorySelected[key]) {
                category = [...category, key];
              }
            }
            return category;
          };
          navigation.navigate("Ingredient", {
            title: title,
            description: description,
            category: getCategory(),
          });
        }}
      >
        <View>
          <Text
            style={{
              ...styles.label,
              color: "white",
              fontSize: 20,
            }}
          >
            Next
          </Text>
        </View>
        <AntDesign
          name="arrowright"
          size={24}
          color="white"
          style={{ paddingHorizontal: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: "lightgray",
  },
  header: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    backgroundColor: "lightgray",
  },
  title: {
    fontSize: 18,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "orange",
    borderRadius: 100,
    padding: 20,
    width: Dimensions.get("window").width / 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryScreen;
