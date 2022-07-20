import React from "react";

const Total = ({ total }) => {
  const s = total.map((p) => p.exercises);
  const totalSum = s.reduce(function (sum, order) {
    return sum + order;
  });

  return <h3>total of {totalSum} exercises </h3>;
};

export default Total;
