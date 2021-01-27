import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/RecipeContext";
import { Feather, AntDesign } from "@expo/vector-icons";
import RecipeCard from "../components/RecipeCard";

const IndexScreen = ({ navigation }) => {
  const { state, deleteRecipe } = useContext(Context);

  return (
    <View>
      {
        //<Button title="Add New Recipe" onPress={() => navigation.navigate("Create")}/>
      }
      <FlatList
        data={state}
        keyExtractor={(recipe) => recipe.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Show", {
                  id: item.id,
                });
              }}
            >
              <View style={styles.row}>
                <RecipeCard recipe={item} />
                {false ? (
                  <TouchableOpacity
                    onPress={() => {
                      deleteRecipe(item.id);
                    }}
                  >
                    <Feather style={styles.trashIcon} name="trash" />
                  </TouchableOpacity>
                ) : null}
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Naming")}>
        <AntDesign name="pluscircle" size={50} style={styles.plusIcon} />
      </TouchableOpacity>
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity>
        <AntDesign name="search1" size={24} style={styles.searchIcon} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 40,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
  trashIcon: {
    fontSize: 24,
    color: "lightgray",
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
});

export default IndexScreen;
