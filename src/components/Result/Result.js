import React from "react";

const Result = ({ result }) =>
  console.log(result) || result.length > 0 ? (
    result.map(
      ({ show }) =>
        console.log(show) || (
          <div key={show.id}>
            <p>{`Name: ${show.name}, Type: ${show.type}`}</p>
            <img
              alt=""
              src={
                show.image
                  ? show.image.medium
                  : "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
              }
            />
          </div>
        )
    )
  ) : (
    <p>No show found</p>
  );

export default Result;
