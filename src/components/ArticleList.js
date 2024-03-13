import React from "react";
import Article from "./Article";
// ArticleList component
function ArticleList(props) {
    // Destructuring props
    const { posts } = props;
  
    return (
      <main>
        {Array.isArray(posts) &&
          posts.map((post, index) => (
            <Article
              key={index}
              title={post.title}
              date={post.date}
              preview={post.preview}
              />
      ))}
    </main>
    );
  }

  export default ArticleList;
  