import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function InputWithButton(props) {
  const [searchInput, setSearchInput] = useState('');

  const inputHandler = (e) => {
    let input = e.target.value.toLowerCase();
    setSearchInput(input);

  }

  const handleButtonClick = (e) => {
    let data = {apiKey: "28e7c85c777e479abf6e8145a94ffece", query: searchInput};
    fetch(`https://api.spoonacular.com/food/products/suggest?apiKey=${data.apiKey}&query=${searchInput}`).then((response) => { return response.json();
    }).then((result) => {
      props.handleOpen(result);
      
    }).catch((error) => console.log(error))

    console.log(searchInput);
  };

  return (
    <div className='root'>
      <TextField className='input' label={props.label} variant="outlined" onChange={inputHandler}/>
      <Button variant="contained" color="primary" onClick={handleButtonClick}>Submit</Button>
    </div>
  );
}

export default InputWithButton;
