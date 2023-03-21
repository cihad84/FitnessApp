import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Nav() {
  return (
    <div className="root">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className="title">
            My App
          </Typography>
          <Button to="/" color="inherit">
            Recipes
          </Button>
          <Button to="/count-calories" color="inherit">
            Count Calories
          </Button>
          <Button to="/login" color="inherit">
            Login
          </Button>
          <Button to="/signup" color="inherit">
            Signup
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Nav;
