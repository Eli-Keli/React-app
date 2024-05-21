import React from "react";

function ListComponent(props) {
    const items = props.items;

    return (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
}

export default ListComponent;