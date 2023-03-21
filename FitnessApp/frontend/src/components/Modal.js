import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "auto",
};

export default function BasicModal(props) {
  const handleClick = (event) => {
    let data = { apiKey: "28e7c85c777e479abf6e8145a94ffece" };

    if (props.selectedIndex[1] === 1) {
      fetch(
        `https://api.spoonacular.com/food/products/${event.target.parentNode.id}?apiKey=${data.apiKey}`
      )
        .then((response) => {
          return response.json();
        })
        .then((results) => {



          props.setProduct(results);
        }).then(() => {
          props.handleClose();
        })
        .catch((error) => console.log(error));
    }
    else {
      fetch(
        `https://api.spoonacular.com/food/ingredients/${event.target.parentNode.id}/information?apiKey=${data.apiKey}&amount=1`
      )
        .then((response) => {
          return response.json();
        })
        .then((results) => {



          props.setProduct(results);
        }).then(() => {
          props.handleClose();
        })
        .catch((error) => console.log(error));
    }

  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <List>
            {props.listRec.map((recipe) => {
              return (
                <ListItemButton
                  onClick={handleClick}
                  id={recipe.id}
                  key={recipe.id}
                >
                  <ListItem>
                    <ListItemText id={recipe.id}>{recipe.title}</ListItemText>
                  </ListItem>
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Modal>
    </div>
  );
}
