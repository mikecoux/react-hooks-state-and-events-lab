import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appMode, changeMode] = useState(false)
  const appClass = appMode ? "App dark" : "App light"

  function handleButtonClick() {
    changeMode(!appMode);
  }

  function displayMode() {
    if (appMode) {
      return "Dark Mode"
    } else {
      return "Light Mode"
    }
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleButtonClick}>{displayMode()}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
