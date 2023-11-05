import React from "react";

import classes from "./ShopList.module.css";

const ShopList = () => {
  return (
    <div className={classes.wrapper}>
      <form className={classes.form}>
        <div className={classes.item}>
          <label className={classes.label}>Product</label>
          <input className={classes.input} type="text" />
        </div>
        <div className={classes.item}>
          <label className={classes.label}>Quantity</label>
          <input className={classes.input} type="text" />
        </div>
        <div className={classes.item}>
          <label className={classes.label}>Additional note</label>
          <input className={classes.input} type="text" />
        </div>
        <div className={classes.item}>
          <button className={classes.button}>Add product</button>
        </div>
      </form>
    </div>
  );
};

export default ShopList;
