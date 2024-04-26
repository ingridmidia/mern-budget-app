import React from "react";
import { Grid, Box, Paper } from "@mui/material";
import GraphDropdown from "../components/graphs/graphDropdown";
import Auth from "../utils/auth";

const Graph = () => {
  // Check if the user is logged in
  if (!Auth.loggedIn()) {
    return <p>You need to be logged in to see this page.</p>;
  }

  const containerStyle = {
    border: "1px solid #ddd", // Add a border with a light gray color
    borderRadius: "8px", // Add rounded corners
    marginBottom: "20px", // Add some spacing between containers
    padding: "20px", // Add internal padding
    marginTop: "20px",
    background: "white",
  };

  return (
    <Box sx={{ flexGrow: 1 }} justifyContent={"center"}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={11} sm={8} md={6} lg={5}>
          <Paper
            sx={{
              padding: "20px",
              borderRadius: "8px",
              marginTop: "20px",
              background: "white",
            }}
          >
            <GraphDropdown />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Graph;
