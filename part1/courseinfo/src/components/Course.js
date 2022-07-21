import React from "react";
import Header from "./Header";

const Course = ({ course }) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Header header={course} />
    </div>
  );
};

export default Course;
