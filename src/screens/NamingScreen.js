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

const NamingScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { addRecipe } = useContext(Context);

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      ></TextInput>
      <Text style={styles.label}>Enter Description:</Text>
      <TextInput
        style={styles.input}
        value={description}
        onChangeText={(description) => setDescription(description)}
      ></TextInput>
      <Button
        title="Add Recipe"
        onPress={() => {
          addRecipe(title, description, () => {
            navigation.navigate("Index");
          });
        }}
      ></Button>
      <Button
        title="Next"
        onPress={() => {
          //addRecipe(title, description);
          navigation.navigate("Ingredient");
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default NamingScreen;
