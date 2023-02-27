import React, {useState} from 'react'
import './App.css';
import Nav from './components/Nav.js';
import Search from './components/Search.js';
import Modal from './components/Modal.js';

function App() {
  const [open, setOpen] = React.useState(false);
  const [listRec, setListRec] = React.useState([]);
  const handleOpen = (data) => {
    console.log('this is data', data);
    setListRec(data.results);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);



  return (
    <div className="App">
      <Nav></Nav>
      <Search handleOpen={handleOpen}></Search>
      <Modal handleOpen={handleOpen} handleClose={handleClose} open={open} listRec={listRec}></Modal>
    </div>
  );
}

export default App;
