import React from "react";

// Header component
function Header(props) {
    // Destructuring props
    const { name } = props;
  
    return (
      <header>
        <h1>{name}</h1>
      </header>
    );
  }

export default Header;