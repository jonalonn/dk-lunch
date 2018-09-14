import React from "react";

const People = ({ people }) =>
  people.map((person, i) => <p key={i}>{person}</p>);

export default People;
