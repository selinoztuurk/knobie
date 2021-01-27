import React, { useState, useReducer } from "react";
import createDataContext from "./createDataContext";

const ingredientReducer = (state, action) => {
  switch (action.type) {
    case "add_ingredient":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          image: action.payload.image,
        },
      ];
    case "delete_ingredient":
      return state.filter((ingredient) => ingredient.id !== action.payload);
    default:
      return state;
  }
};

const addIngredient = (dispatch) => {
  return (title, image, callback) => {
    dispatch({
      type: "add_ingredient",
      payload: { title, image },
    });
    if (callback) {
      callback();
    }
  };
};

const deleteIngredient = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_ingredient", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  ingredientReducer,
  { addIngredient, deleteIngredient },
  [
    { title: "Fruits", image: "../../assets/pictures/apple.png", id: 1 },
    { title: "Vegetables", image: "../../assets/pictures/apple.png", id: 2 },
    { title: "Delicatessen", image: "../../assets/pictures/apple.png", id: 3 },
    { title: "Dairies", image: "../../assets/pictures/apple.png", id: 4 },
    { title: "Spices", image: "../../assets/pictures/apple.png", id: 5 },
    { title: "Oils", image: "../../assets/pictures/apple.png", id: 6 },
    { title: "Sauces", image: "../../assets/pictures/apple.png", id: 7 },
    { title: "Nuts", image: "../../assets/pictures/apple.png", id: 8 },
    { title: "Misc1", image: "../../assets/pictures/apple.png", id: 9 },
    { title: "Misc2", image: "../../assets/pictures/apple.png", id: 10 },
    { title: "Misc3", image: "../../assets/pictures/apple.png", id: 11 },
    { title: "Misc3", image: "../../assets/pictures/apple.png", id: 12 },
  ]
);
