// import React from "react";
// import Auth from "../utils/auth";
// import { useQuery } from "@apollo/client";
// import { QUERY_ME } from "../utils/queries";
// import Button from "@mui/material/Button";
// import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
// import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
// import Hello from "../components/Hello";
// import MakeExtraBar from "../components/graphs/extraGraph/extraGraph";
// import { Grid, Paper } from "@mui/material";

// const Overview = () => {
//   // Check if the user is logged in
//   // if (!Auth.loggedIn()) {
//   //   return (
//   //     <>
//   //       <Grid container justifyContent="space-around" sx={{ marginTop: 2 }}>
//   //         <a href="/Login" style={{ textDecoration: "none" }}>
//   //           <Button variant="contained" color="success">
//   //             Log In
//   //           </Button>
//   //         </a>
//   //         <a href="/Signup" style={{ textDecoration: "none" }}>
//   //           <Button variant="contained" color="success">
//   //             Sign Up
//   //           </Button>
//   //         </a>
//   //       </Grid>
//   //     </>
//   //   );
//   // }

//   const addExpense = (event) => {
//     event.preventDefault();
//     window.location.assign("/expense");
//   };

//   const addIncome = (event) => {
//     event.preventDefault();
//     window.location.assign("/income");
//   };

//   const { loading, data } = useQuery(QUERY_ME, {
//     fetchPolicy: "no-cache",
//   });

//   // Handle loading state
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!data) {
//     Auth.logout();
//   }

//   // User data is available
//   const userInfo = data.me;

//   const containerStyle = {
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     padding: "0.5rem",
//     marginTop: "20px",
//     background: "white",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };

//   return (
//     <>
//       <Grid
//         container
//         spacing={4}
//         className="text-center"
//         id="hello"
//         style={{
//           containerStyle,
//           fontFamily: "andika, sans-serif",
//           padding: "1rem",
//           width: "90%",
//           margin: "auto",
//           backgroundColor: "#BBEDC4",
//           marginTop: "2rem",
//           borderRadius: "1rem",
//         }}
//       >
//         <Grid item xs={12} md={6}>
//           <Hello userInfo={userInfo} />
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               color="success"
//               style={{
//                 fontFamily: "andika, sans-serif",
//                 color: "white",
//                 fontWeight: "bold",
//                 margin: "1.5rem",
//               }}
//               startIcon={<KeyboardDoubleArrowUpIcon />}
//               onClick={(event) => addIncome(event)}
//             >
//               Add Income
//             </Button>
//             <Button
//               variant="contained"
//               color="success"
//               style={{
//                 fontFamily: "andika, sans-serif",
//                 color: "white",
//                 fontWeight: "bold",
//                 margin: "1.5rem",
//               }}
//               startIcon={<KeyboardDoubleArrowDownIcon />}
//               onClick={(event) => addExpense(event)}
//             >
//               Add Expense
//             </Button>
//           </Grid>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Grid container justifyContent="center" style={{ maxHeight: "50vh" }}>
//             <Paper elevation={24} style={{ width: "100%", padding: "2rem", justifyContent: "center" }}>
//               <MakeExtraBar
//                 style={{ width: "100%", fontFamily: "andika, sans-serif" }}
//                 justifyContent="center"
//               />
//             </Paper>
//           </Grid>
//         </Grid>
//       </Grid>
//     </>
//   );
// };

// export default Overview;

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
    <>
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
          bgcolor: "#BBEDC4",
          borderRadius: "1rem",
        }}
      >
        <Grid item xs={12} md={6} sx={{ p: "1rem" }}>
          <Hello userInfo={userInfo} />
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6} md={6}>
              <Button
                variant="contained"
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
                variant="contained"
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
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: "2rem", bgcolor: "white" }} elevation={24}>
            <MakeExtraBar sx={{ width: "100%" }} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Overview;
