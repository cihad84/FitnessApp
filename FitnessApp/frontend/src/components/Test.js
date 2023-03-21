import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import "../styles/test.css";

function Test(props) {
  if (props.product.nutrition === undefined) {
    return (
      <div className="main">
        <div className="container">
          <Typography variant="h4" align="center" gutterBottom>
            Welcome to My Fitness App
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Get fit and healthy with our easy-to-use fitness app.
          </Typography>
          <Button variant="contained" size="large" className="button" href="#">
            Get started
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Nutrition Facts</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.product.nutrition.nutrients.map((vitamin) => (
              <TableRow key={vitamin.name}>
                <TableCell>{vitamin.name}</TableCell>
                <TableCell align="right">
                  {vitamin.amount + " " + vitamin.unit}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography variant="caption">
          * Percent Daily Values are based on a 2,000 calorie diet.
        </Typography>
      </TableContainer>
    );
  }
}

export default Test;
