import React, { useState, useReducer } from "react";
import createDataContext from "./createDataContext";

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "add_recipe":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          description: action.payload.description,
        },
      ];
    case "delete_recipe":
      return state.filter((recipe) => recipe.id !== action.payload);
    default:
      return state;
  }
};

const addRecipe = (dispatch) => {
  return (title, description, callback) => {
    dispatch({ type: "add_recipe", payload: { title, description } });
    callback();
  };
};

const deleteRecipe = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_recipe", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  recipeReducer,
  { addRecipe, deleteRecipe },
  []
);
