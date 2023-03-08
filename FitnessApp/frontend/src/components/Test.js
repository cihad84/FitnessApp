import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function Test(props) {
  const nutrientRows = [
    { name: "Calories", value: props.product.calories },
    { name: "Total Fat", value: 10 },
    { name: "Saturated Fat", value: 10 },
    { name: "Trans Fat", value: 20 },
    { name: "Cholesterol", value: 30 },
    { name: "Sodium", value: 40 },
    { name: "Total Carbohydrates", value: 500 },
    { name: "Dietary Fiber", value: 5 },
    { name: "Total Sugars", value: 20 },
    { name: "Protein", value: 20 },
  ];

  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Nutrition Facts</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {nutrientRows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.value}</TableCell>
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

export default Test;
