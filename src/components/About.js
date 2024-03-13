import React from "react";

// About component
function About(props) {
    // Destructuring props
    const { image, about } = props;
  
    // Setting default values if props are not provided
    const imageUrl = image || "https://via.placeholder.com/215";
    const altText = "blog logo";
  
    return (
      <aside>
        <img src={imageUrl} alt={altText} />
        <p>{about}</p>
      </aside>
    );
  }
export default About;  