import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "/Users/drake/Desktop/MORINGA/code/phase2/react-hooks-component-props-mini-project/src/data/blog.js";

const App = () => {
  return (
    <div>
      <Header blogName={blogData.name} />
      <About logoSrc={blogData.image} about={blogData.about} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
};

export default App;

