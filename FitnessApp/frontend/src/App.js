import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import Search from "./components/Search.js";
import Modal from "./components/Modal.js";
import Test from "./components/Test.js";

function App() {
  const [open, setOpen] = React.useState(false);
  const [listRec, setListRec] = React.useState([]);
  const [product, setProduct] = React.useState({"nutrition": {
    "nutrients": [
        {
            "name": "Fat",
            "amount": 4,
            "unit": "g",
            "percentOfDailyNeeds": 6.15
        },
        {
            "name": "Protein",
            "amount": 10,
            "unit": "g",
            "percentOfDailyNeeds": 20
        },
        {
            "name": "Calories",
            "amount": 200,
            "unit": "cal",
            "percentOfDailyNeeds": 10
        },
        {
            "name": "Carbohydrates",
            "amount": 26,
            "unit": "g",
            "percentOfDailyNeeds": 9.45
        },
    ]}});
  const handleOpen = (data) => {
    console.log("this is data", data);
    setListRec(data.results);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Nav></Nav>
      <Search handleOpen={handleOpen}></Search>
      <Modal
        setProduct={setProduct}
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        listRec={listRec}
      ></Modal>
      <Test product={product}></Test>
    </div>
  );
}

export default App;
