import React from "react";

const Content = ({ content }) => {
  return (
    <div>
      {content.map((p) => (
        <p>
          {p.name} {p.exercises}
        </p>
      ))}
    </div>
  );
};
export default Content;
