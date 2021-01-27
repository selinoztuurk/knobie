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
  Image,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

//

const IngredientSelectionScreen = ({ navigation }) => {
  const content = navigation.getParam("content");
  console.log(content);
  const [ingredientsSelected, setIngredientsSelected] = useState({});
  useEffect(() => {
    for (ingredient in content) {
      setIngredientsSelected({
        ...ingredientsSelected,
        ingredient: false,
      });
    }
  }, []);

  return (
    <View>
      <Text style={styles.header}>Ingredients</Text>
      <FlatList
        data={content}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                console.log(item + " Category pressed");
                setIngredientsSelected({
                  ...ingredientsSelected,
                  [item]: !ingredientsSelected[item],
                });
              }}
            >
              <View style={styles.row}>
                <View style={styles.imageView}>
                  <Image
                    style={styles.imageStyle}
                    source={require("../../assets/pictures/apple.png")}
                  ></Image>
                </View>
                <Text style={styles.title}>{item}</Text>
                {ingredientsSelected[item] ? (
                  <AntDesign
                    name="check"
                    size={16}
                    color="gray"
                    style={{ marginLeft: "auto", alignSelf: "center" }}
                  />
                ) : null}
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <Button
        title="Next"
        onPress={() => {
          const getContent = () => {
            var content = [];
            for (key in ingredientsSelected) {
              if (ingredientsSelected[key]) {
                content = [...content, key];
              }
            }
            return content;
          };
          navigation.navigate("Ingredient", { content: getContent() });
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: "row",
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
    paddingLeft: 20,
    fontSize: 18,
    alignSelf: "center",
  },
  imageStyle: {
    width: Dimensions.get("window").width / 10,
    height: Dimensions.get("window").width / 8,
    resizeMode: "contain",
  },
  imageView: {},
});

export default IngredientSelectionScreen;
