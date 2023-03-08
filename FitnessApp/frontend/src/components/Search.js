import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import ListSubheader from "@mui/material/ListSubheader";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function InputWithButton(props) {
  const [searchInput, setSearchInput] = useState("");
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(["Products", 1]);

  const handleListItemClick = (event, index, name) => {
    setSelectedIndex([name, index]);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  const inputHandler = (e) => {
    let input = e.target.value.toLowerCase();
    setSearchInput(input);
  };

  const handleButtonClick = (e) => {
    let data = {
      apiKey: "28e7c85c777e479abf6e8145a94ffece",
      query: searchInput,
    };
    fetch(
      `https://api.spoonacular.com/food/products/suggest?apiKey=${data.apiKey}&query=${searchInput}`
    )
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        props.handleOpen(result);
      })
      .catch((error) => console.log(error));

    console.log(searchInput);
  };

  return (
    <div className="root">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} direction="row" justifyContent="center">
          <Grid item xs={3} justifyContent="center" alignItems="center">
            <List
              sx={{ width: "100%", maxWidth: 200 }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader
                  sx={{ background: "none" }}
                  component="div"
                  id="nested-list-subheader"
                >
                  Search Criteria
                </ListSubheader>
              }
            >
              <ListItemButton onClick={handleClick}>
                <ListItemText primary={selectedIndex[0]} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    selected={selectedIndex[1] === 1}
                    onClick={(event) =>
                      handleListItemClick(event, 1, "Products")
                    }
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary="Products" />
                  </ListItemButton>
                  <ListItemButton
                    selected={selectedIndex[1] === 2}
                    onClick={(event) =>
                      handleListItemClick(event, 2, "Ingredients")
                    }
                    sx={{ pl: 4 }}
                  >
                    <ListItemText primary="Ingredients" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Grid>
          <Grid item xs={4} justifyContent="center" alignItems="center">
            <TextField
              className="input"
              label={props.label}
              variant="outlined"
              onChange={inputHandler}
            />
          </Grid>
          <Grid item xs={4} justifyContent="center" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default InputWithButton;
