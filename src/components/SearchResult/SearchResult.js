import React from "react";

const SearchResult = ({ results, fetched }) =>
  fetched && results.length > 0 ? (
    results.map(({ show: { name, image, premiered } }, iteration) => (
      <ul key={iteration}>
        <h2>{name}</h2>
        {image ? (
          <li>
            <img src={image.medium} />
          </li>
        ) : null}
        <li>Premiered: {premiered}</li>
      </ul>
    ))
  ) : (
    <p>no result</p>
  );

export default SearchResult;
