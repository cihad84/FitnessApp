import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.js";
import Search from "./components/Search.js";
import Modal from "./components/Modal.js";
import Test from "./components/Test.js";

function App() {
  const [open, setOpen] = React.useState(false);
  const [listRec, setListRec] = React.useState([]);
  const [selectedIndex, setSelectedIndex] = React.useState(["products", 1]);
  const [product, setProduct] = React.useState({});
  const handleOpen = (data) => {
    setListRec(data.results);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="App">
      <Nav></Nav>
      <Search selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} handleOpen={handleOpen}></Search>
      <Modal
        setProduct={setProduct}
        handleOpen={handleOpen}
        handleClose={handleClose}
        open={open}
        listRec={listRec}
        selectedIndex={selectedIndex}
      ></Modal >
      <Test product={product}></Test>
    </div>
  );
}

export default App;
