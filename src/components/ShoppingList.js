import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [choice, setChoice] = useState('All')
  const choices = items.filter((item) => choice === "All" ?  true : item.category === choice)

  function handleFilter(e) {
    setChoice(e.target.value);
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilter} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {choices.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
