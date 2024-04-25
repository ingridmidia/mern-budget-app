import React from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import Hello from "../components/Hello";
import MakeExtraBar from "../components/graphs/extraGraph/extraGraph";
import { Grid, Paper } from "@mui/material";

const Overview = () => {
  const { loading, data } = useQuery(QUERY_ME, {
    fetchPolicy: "no-cache",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    Auth.logout();
  }

  const userInfo = data.me;

  return (
    <div style={{ marginTop: "5rem" }}>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{
          mt: 2,
          fontFamily: "andika, sans-serif",
          width: "90%",
          margin: "auto",
          borderRadius: "1rem",
        }}
      >
        <Grid item xs={12} md={6} sx={{ p: "1rem" }}>
          <Hello userInfo={userInfo} />
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6} md={6}>
              <Button
                variant="outlined"
                color="success"
                fullWidth
                sx={{ fontWeight: "bold", mt: 2 }}
                startIcon={<KeyboardDoubleArrowUpIcon />}
                onClick={() => window.location.assign("/income")}
              >
                Add Income
              </Button>
            </Grid>
            <Grid item xs={6} md={6}>
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
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} style={{ padding: "1rem" }}>
          <Paper sx={{ p: "1rem", bgcolor: "white" }} elevation={24}>
            <MakeExtraBar sx={{ width: "100%" }} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;
