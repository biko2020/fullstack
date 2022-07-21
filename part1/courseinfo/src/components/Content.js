import React from "react";
import Parts from "./Parts";
import Total from "./Total";

const Content = ({ content }) => {
  return (
    <div>
      {content.map((p) => (
        <Parts part={p} />
      ))}
      <Total total={content} />
    </div>
  );
};

export default Content;
