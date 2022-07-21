import React from "react";

const Total = ({ total }) => {
  const sum = 0;
  const value = total.map((p) => p.exercises);

  const totalSum = value.reduce(function (sum, order) {
    return sum + order;
  });

  return <h3>total of {totalSum} exercises </h3>;
};

export default Total;
