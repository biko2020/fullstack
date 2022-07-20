import React from "react";

const Total = ({ total }) => {
  const parts = total.map((p) => p.exercises);
  const totalSum = parts.reduce((sum, order) => {
    return sum + order;
  });

  return <h3>total of {totalSum} exercises </h3>;
};

export default Total;
