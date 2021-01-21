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
          content: action.payload.content,
        },
      ];
    case "delete_recipe":
      return state.filter((recipe) => recipe.id !== action.payload);
    default:
      return state;
  }
};

const addRecipe = (dispatch) => {
  return (title, content) => {
    dispatch({ type: "add_recipe", payload: { title, content } });
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

/*export const BlogProvider = ({ children }) => {
  //const [blogPosts, setBlogPosts] = useState([]);

  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  /*const addBlogPost = () => {
    setBlogPosts([
      ...blogPosts,
      { title: `Blog Post #${blogPosts.length + 1}` },
    ]);
  };
  <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
  */

/*const addBlogPost = () => {
    dispatch({ type: "add_blogpost" });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};


export default BlogContext;*/
