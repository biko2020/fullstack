import React from "react";
import Content from "./Content";

const Header = ({ header }) => {
  return (
    <div>
      {header.map((title) => (
        <div>
          <h2>{title.name} </h2>
          <Content content={title.parts} />
        </div>
      ))}
    </div>
  );
};

export default Header;
