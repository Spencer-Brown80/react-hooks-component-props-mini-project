import React from "react";
import blogData from "../data/blog";
import About from "./About";
import ArticleList from "./ArticleList";
import Header from "./Header";
import Article from "./Article";

function App() {
  
  const { name, image, about, posts } = blogData;

  return (
    <div className="App">
      <Header name={name} />
      <About image={image} about={about} />
      {posts.map((post, index) => (
        <ArticleList key={index} title={post.title} preview={post.preview} />
      ))}
    </div>
  );
}

export default App;