import React, { useState, useReducer } from "react";
import createDataContext from "./createDataContext";

//const BlogContext = React.createContext();

const recipeReducer = (state, action) => {
  switch (action.type) {
    case "add_recipe":
      return [...state, { title: `Recipe #${state.length + 1}` }];
    default:
      return state;
  }
};

const addRecipe = (dispatch) => {
  return () => {
    dispatch({ type: "add_recipe" });
  };
};

export const { Context, Provider } = createDataContext(
  recipeReducer,
  { addRecipe },
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
