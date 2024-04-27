import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import currencyFormater from "../../utils/currencyFormater";
import { pink } from "@mui/material/colors";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Typography from "@mui/material/Typography";

const ExpenseTable = ({ data, onUpdate, onDelete }) => {
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: ["green", "#902b68"],
      color: "white",
      fontSize: 14,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  }));

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", md: 700 },
        padding: { xs: "0.5rem 0 0 0", md: "1rem 1rem 0 1rem" },
        margin: "auto",
      }}
    >
      <Typography variant="h5" component="h2" align="center" gutterBottom>
        Expenses
      </Typography>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ width: "25%" }}>Date</StyledTableCell>
            <StyledTableCell sx={{ width: "35%" }}>Description</StyledTableCell>
            <StyledTableCell sx={{ width: "20%" }}>Amount</StyledTableCell>
            <StyledTableCell sx={{ width: "20%" }}>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((expense) => (
            <StyledTableRow
              key={expense._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {expense.createdAt}
              </TableCell>
              <TableCell>
                {`${expense.description}`} <br />
                <div
                  style={{ fontSize: 12, fontStyle: "italic" }}
                >{`${expense.category}`}</div>
              </TableCell>
              <TableCell>{currencyFormater(expense.amount)}</TableCell>
              <TableCell>
                <EditIcon
                  sx={{ marginRight: { md: "5px" } }}
                  onClick={(event) => onUpdate(event, expense._id)}
                >
                  Edit
                </EditIcon>
                <DeleteIcon
                  sx={{
                    marginLeft: { xs: "2px" },
                    color: pink[500],
                  }}
                  onClick={(event) => onDelete(event, expense._id)}
                >
                  Delete
                </DeleteIcon>
              </TableCell>
            </StyledTableRow>
          ))}
          <TableRow>
            <TableCell colSpan={5} align="center">
              <Button
                variant="outlined"
                color="success"
                fullWidth
                sx={{ fontWeight: "bold", mt: 2 }}
                startIcon={<KeyboardDoubleArrowDownIcon />}
                onClick={() => window.location.assign("/expense")}
              >
                Add Expense
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExpenseTable;
