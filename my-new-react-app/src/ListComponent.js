import React from "react";

function ListComponent(props) {
    const items = props.items;

    return (
      <>
        <h1>{props.heading}</h1>
        {items.length === 0 && <p>No Items Found</p>}
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </>
        
      );
}

export default ListComponent;