import React from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Hello from "../components/Hello";
import MakeExtraBar from "../components/graphs/extraGraph/extraGraph";
import { Grid, Paper} from "@mui/material";

const Overview = () => {
  // Check if the user is logged in
  // if (!Auth.loggedIn()) {
  //   return (
  //     <>
  //       <Grid container justifyContent="space-around" sx={{ marginTop: 2 }}>
  //         <a href="/Login" style={{ textDecoration: "none" }}>
  //           <Button variant="contained" color="success">
  //             Log In
  //           </Button>
  //         </a>
  //         <a href="/Signup" style={{ textDecoration: "none" }}>
  //           <Button variant="contained" color="success">
  //             Sign Up
  //           </Button>
  //         </a>
  //       </Grid>
  //     </>
  //   );
  // }

  const addExpense = (event) => {
    event.preventDefault();
    window.location.assign("/expense");
  };

  const addIncome = (event) => {
    event.preventDefault();
    window.location.assign("/income");
  };

  const { loading, data } = useQuery(QUERY_ME, {
    fetchPolicy: "no-cache",
  });

  // Handle loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    Auth.logout();
  }

  // User data is available
  const userInfo = data.me;

  const containerStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "0.5rem",
    marginTop: "20px",
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <>
      <div
        className="text-center"
        id="hello"
        style={{
          containerStyle,
          fontFamily: "andika, sans-serif",
          padding: "2rem",
          width: "50%",
          margin: "auto",
          backgroundColor: "#BBEDC4",
          marginTop: "2rem",
          borderRadius: "1rem",
        }}
      >
        <Hello userInfo={userInfo} />
        <div className="container" style={containerStyle}>
          <Button
            variant="outlined"
            color="success"
            style={{
              fontFamily: "andika, sans-serif",
              color: "#365242",
              fontWeight: "bold",
              marginRight: "1rem",
            }}
            startIcon={<KeyboardDoubleArrowUpIcon />}
            onClick={(event) => addIncome(event)}
          >
            Add Income
          </Button>
          <Button
            variant="outlined"
            color="success"
            style={{
              fontFamily: "andika, sans-serif",
              color: "#365242",
              fontWeight: "bold",
              marginLeft: "1rem",
            }}
            startIcon={<KeyboardDoubleArrowDownIcon />}
            onClick={(event) => addExpense(event)}
          >
            Add Expense
          </Button>
        </div>
        <Grid container justifyContent="center" style={{ maxHeight: "50vh" }}>
          <Paper elevation={24} style={{ width: "50%", padding: "16px" }}>
            <MakeExtraBar
              style={{ width: "100%", fontFamily: "andika, sans-serif" }}
              justifyContent="center"
            />
          </Paper>
        </Grid>
      </div>
    </>
  );
};

export default Overview;