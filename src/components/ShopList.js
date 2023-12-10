import React, { useState } from "react";

import classes from "./ShopList.module.css";

const ShopList = () => {
  const [form, setForm] = useState({
    id: 0,
    product: "",
    quantity: "",
    note: "",
  });

  const [shopListState, setShopListState] = useState([]);
  const [disabledButton, setDisabledButton] = useState(false);

  const addItem = () => {
    setShopListState([
      ...shopListState,
      {
        id: shopListState.length,
        product: form.product,
        quantity: form.quantity,
        note: form.note,
      },
    ]);
    return [...shopListState];
  };

  // const addNewItemAndResetForm = () => {
  //   setShopListState((prevState) => {
  //     return [form, ...prevState];
  //   });
  //   setForm({
  //     product: "",
  //     quantity: "",
  //     note: "",
  //   });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm({
      product: "",
      quantity: "",
      note: "",
    });
  };

  return (
    <div className={classes.wrapper}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <div className={classes.item}>
          <label className={classes.label}>Product</label>
          <input
            className={classes.input}
            type="text"
            id="product"
            onChange={(e) => setForm({ ...form, product: e.target.value })}
            value={form.product}
          />
        </div>
        <div className={classes.item}>
          <label className={classes.label}>Quantity</label>
          <input
            className={classes.input}
            type="text"
            id="quantity"
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            value={form.quantity}
          />
        </div>
        <div className={classes.item}>
          <label className={classes.label}>Additional note</label>
          <input
            className={classes.input}
            type="text"
            id="note"
            onChange={(e) => setForm({ ...form, note: e.target.value })}
            value={form.note}
          />
        </div>
        <div className={classes.item}>
          <button
            disabled={
              !disabledButton
                ? !form.product.length || !form.quantity.length
                : null
            }
            style={{
              backgroundColor:
                !form.product.length || !form.quantity.length
                  ? "rgb(84, 84, 84)"
                  : "white",
            }}
            className={classes.button}
            onClick={() => {
              addItem();
            }}
          >
            Add product
          </button>
        </div>
      </form>
      <ul className={classes.list}>
        {shopListState.map((listItem, index) => {
          return (
            <>
              <li key={listItem.id}>
                {listItem.product} {listItem.quantity} {listItem.note}
                <button
                  className={classes.button}
                  onClick={() => {
                    setShopListState(
                      shopListState.filter((item) => item.id !== listItem.id)
                    );
                  }}
                >
                  Delete
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default ShopList;
