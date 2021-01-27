import React, { useContext, useState } from "react";
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

const NamingScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { state, addRecipe } = useContext(Context);

  return (
    <View style={styles.view}>
      <TextInput
        style={styles.input}
        placeholder="Name the recipe"
        onChangeText={(text) => setTitle(text)}
        multiline={true}
      ></TextInput>
      <TextInput
        style={styles.input}
        placeholder="Describe it a little"
        onChangeText={(description) => setDescription(description)}
        multiline={true}
      ></TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          //addRecipe(title, description);
          navigation.navigate("Category", {
            title: title,
            description: description,
          });
        }}
      >
        <View>
          <Text
            style={{
              ...styles.label,
              color: "white",
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
  view: {
    padding: 20,
  },
  input: {
    fontSize: 18,
    backgroundColor: "lightgray",
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
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

export default NamingScreen;
