// import React from "react";
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
// import currencyFormater from "../../utils/currencyFormater";
// import { pink } from "@mui/material/colors";
// import Button from "@mui/material/Button";
// import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
// import Typography from "@mui/material/Typography";

// const IncomeTable = ({ data, onUpdate, onDelete }) => {
//   const StyledTableCell = styled(TableCell)(({ theme }) => ({
//     [`&.${tableCellClasses.head}`]: {
//       backgroundColor: ['green', '#902b68'],
//       color: 'white',
//       fontSize: 15,
//     },
//     [`&.${tableCellClasses.body}`]: {
//       fontSize: 15,
//     },
//   }));
  
//   const StyledTableRow = styled(TableRow)(({ theme }) => ({
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.action.hover,
//     },
//     // hide last border
//     '&:last-child td, &:last-child th': {
//       border: 0,
//     },
//   }));

//   return (
//     <TableContainer
//       component={Paper}
//       sx={{ width: 700 }} 
//       style={{ padding: "1rem 1rem 0 1rem" }}
//     >
//       <Typography variant="h5" component="h2" align="center" gutterBottom>
//         Income
//       </Typography>
//       <Table
//         sx={{ minWidth: 650, }}
//         aria-label="simple table"
//       >
//         <TableHead>
//           <TableRow>
//             <StyledTableCell sx={{ width: 150 }}>Date</StyledTableCell>
//             <StyledTableCell sx={{ width: 200 }}>Description</StyledTableCell>
//             <StyledTableCell sx={{ width: 150 }}>Amount</StyledTableCell>
//             <StyledTableCell sx={{ width: 20 }}>Actions</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((income) => (
//             <StyledTableRow
//               key={income._id}
//               sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//             >
//               <TableCell
//                 component="th"
//                 scope="row"
//               >{`${income.createdAt}`}</TableCell>
//               <TableCell>{`${income.description}`}</TableCell>
//               <TableCell>{currencyFormater(income.amount)}</TableCell>
//               <TableCell>
//                 <EditIcon
//                   sx={{ marginRight: "5px" }}
//                   onClick={(event) => onUpdate(event, income._id)}
//                 >
//                   Edit
//                 </EditIcon>
//                 <DeleteIcon
//                   sx={{ marginLeft: "5px", color: pink[500] }}
//                   onClick={(event) => onDelete(event, income._id)}
//                 >
//                   Delete
//                 </DeleteIcon>
//               </TableCell>
//             </StyledTableRow>
//           ))}
//           <TableRow>
//             <TableCell colSpan={4} align="center">
//               <Button
//                 variant="outlined"
//                 color="success"
//                 fullWidth
//                 sx={{ fontWeight: "bold", mt: 2 }}
//                 startIcon={<KeyboardDoubleArrowUpIcon />}
//                 onClick={() => window.location.assign("/expense")}
//               >
//                 Add Expense
//               </Button>
//             </TableCell>
//           </TableRow>
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default IncomeTable;

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
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Typography from "@mui/material/Typography";

const IncomeTable = ({ data, onUpdate, onDelete }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: ["green", "#902b68"],
      color: "white",
      fontSize: 15,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: "100%", // Full width on all screen sizes
        maxWidth: { xs: "100%", md: 700 }, // Full width on mobile, up to 700px on desktop
        padding: { xs: "0.5rem 0.5rem 0 0.5rem", md: "1rem 1rem 0 1rem" }, // Less padding on mobile
        margin: "auto", // Center the container horizontally
      }}
    >
      <Typography variant="h5" component="h2" align="center" gutterBottom>
        Income
      </Typography>
      <Table
        sx={{ minWidth: 300 }} // Adjust minimum width for better mobile responsiveness
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell sx={{ width: "25%" }}>Date</StyledTableCell>{" "}
            {/* Adjust width based on content */}
            <StyledTableCell sx={{ width: "35%" }}>
              Description
            </StyledTableCell>{" "}
            {/* Adjust width based on content */}
            <StyledTableCell sx={{ width: "20%" }}>Amount</StyledTableCell>{" "}
            {/* Adjust width based on content */}
            <StyledTableCell sx={{ width: "20%" }}>
              Actions
            </StyledTableCell>{" "}
            {/* Adjust width based on content */}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((income) => (
            <StyledTableRow
              key={income._id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
              >{`${income.createdAt}`}</TableCell>
              <TableCell>{`${income.description}`}</TableCell>
              <TableCell>{currencyFormater(income.amount)}</TableCell>
              <TableCell>
                <EditIcon
                  sx={{ marginRight: { md: "5px" } }}
                  onClick={(event) => onUpdate(event, income._id)}
                >
                  Edit
                </EditIcon>
                <DeleteIcon
                  sx={{ marginLeft: { xs: "2px", md: "5px" }, color: pink[500] }}
                  onClick={(event) => onDelete(event, income._id)}
                >
                  Delete
                </DeleteIcon>
              </TableCell>
            </StyledTableRow>
          ))}
          <TableRow>
            <TableCell colSpan={4} align="center">
              <Button
                variant="outlined"
                color="success"
                fullWidth
                sx={{ fontWeight: "bold", mt: 2 }}
                startIcon={<KeyboardDoubleArrowUpIcon />}
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

export default IncomeTable;
