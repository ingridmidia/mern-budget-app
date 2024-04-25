import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import WavingHandIcon from "@mui/icons-material/WavingHand";
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
        basil
      </Typography>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/">
          {Auth.loggedIn() ? null : (
            <Tooltip title="Home" placement="bottom" arrow>
              <HomeRoundedIcon
                sx={{ color: titleColor, fontSize: 30, marginRight: "10px" }}
              />
            </Tooltip>
          )}
        </Link>

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
                <LoginRoundedIcon sx={{ color: titleColor, fontSize: 30 }} />
              </Tooltip>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <Tooltip title="Log In" placement="bottom" arrow>
                {" "}
                <LoginRoundedIcon
                  sx={{
                    color: titleColor,
                    fontSize: 30,
                    marginRight: "10px",
                  }}
                />
              </Tooltip>
            </Link>

            <Link to="/signup">
              <Tooltip title="Sign Up" placement="bottom" arrow>
                {" "}
                <AddBoxRoundedIcon
                  sx={{
                    color: titleColor,
                    fontSize: 30,
                    marginRight: "10px",
                  }}
                />
              </Tooltip>
            </Link>

            <Link to="/about">
              <Tooltip title="About Us" placement="bottom" arrow>
                {" "}
                <WavingHandIcon sx={{ color: titleColor, fontSize: 30 }} />
              </Tooltip>
            </Link>
          </>
        )}
      </div>
    </Box>
  );
};

export default Header;
