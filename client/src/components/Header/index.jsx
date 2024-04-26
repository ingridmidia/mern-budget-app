import React from "react";
import { Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import { Tooltip } from "@mui/material";
import Auth from "../../utils/auth";

const Header = () => {
  const backgroundColor = "#BBEDC4";
  const titleColor = "#365242";

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Box
      style={{
        color: titleColor,
        backgroundColor,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem",
      }}
      className="header-container"
    >
      <Typography
        variant="h1"
        style={{ fontFamily: "Comfortaa, sans-serif", fontWeight: 600 }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          basil
        </Link>
      </Typography>

      <div style={{ display: "flex", alignItems: "center" }}>
        {Auth.loggedIn() ? (
          <>
            <Link to="/overview">
              <Tooltip title="Dashboard" placement="bottom" arrow>
                {" "}
                <HomeRoundedIcon
                  sx={{
                    color: titleColor,
                    fontSize: 30,
                    marginRight: "10px",
                  }}
                />
              </Tooltip>
            </Link>

            <Link to="/transaction">
              <Tooltip title="Transaction List" placement="bottom" arrow>
                <AssignmentRoundedIcon
                  sx={{
                    color: titleColor,
                    fontSize: 30,
                    marginRight: "10px",
                  }}
                />
              </Tooltip>
            </Link>

            <Link to="/graphpage">
              <Tooltip title="Spending Graphs" placement="bottom" arrow>
                <AutoGraphRoundedIcon
                  sx={{
                    color: titleColor,
                    fontSize: 30,
                    marginRight: "10px",
                  }}
                />
              </Tooltip>
            </Link>

            <Link to="/home" onClick={logout}>
              <Tooltip title="Log Out" placement="bottom" arrow>
                <LogoutIcon sx={{ color: titleColor, fontSize: 30 }} />
              </Tooltip>
            </Link>
          </>
        ) : (
          <>
            <a href="/login">
              <Button variant="contained" color="success">
                Login
              </Button>
            </a>
          </>
        )}
      </div>
    </Box>
  );
};

export default Header;
