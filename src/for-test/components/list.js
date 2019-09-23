import React from "react";

export const List = ({ list, isLoading }) => {
  if (isLoading) return <>Wait... Content is loading</>;
  if (list.length < 1) return <>Empty data...</>;

  return (
    <ul>
      {list.map(item => (
        <li key={item.name}>
          {item.name} - {item.birth_year}
        </li>
      ))}
    </ul>
  );
};
