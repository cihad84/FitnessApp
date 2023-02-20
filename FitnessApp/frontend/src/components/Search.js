import React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function InputWithButton(props) {


  const handleButtonClick = () => {
    // Handle button click
  };

  return (
    <div className='root'>
      <TextField className='input' label={props.label} variant="outlined" />
      <Button variant="contained" color="primary" onClick={handleButtonClick}>Submit</Button>
    </div>
  );
}

export default InputWithButton;
