import React from "react";

import classes from "./App.module.css";

import ShopList from "./components/ShopList";

function App() {
  return (
    <div className={classes.background}>
      <h1 className={classes.title}>Shop List</h1>
      <ShopList />
    </div>
  );
}

export default App;
