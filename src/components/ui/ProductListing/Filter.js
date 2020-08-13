import React from "react";

export const Filter = (props) => {
  return (
    <section className="filter">
      <select
        onChange={(e) => props.callback(e.target.value)}
        defaultValue="all"
      >
        <option value="all">Colour filter</option>
        {props.filterOptions.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </section>
  );
};
