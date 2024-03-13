import React from "react";

// Article component
function Article(props) {
    // Destructuring props
    const { title, date, preview } = props;
  
    // Setting default date if not provided
    const formattedDate = date || "January 1, 1970";
  
    return (
      <article>
        <h3>{title}</h3>
        <small>{formattedDate}</small>
        <p>{preview}</p>
      </article>
    );
  }

export default Article;