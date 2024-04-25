import * as React from "react";
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

export default function Nav() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const backgroundColor = "#BBEDC4";
  const titleColor = "#365242";

  return (
    <div
      style={{
        backgroundColor,
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        paddingBottom: "0.5rem",
        paddingRight:"0.5rem"
      }}
    >
      <Link to="/">
        <Tooltip title="Home" placement="bottom" arrow>
          <EnergySavingsLeafIcon
            sx={{ color: titleColor, fontSize: 30, marginRight: "10px" }}
          />
        </Tooltip>
      </Link>

      {Auth.loggedIn() ? (
        <>
          <Link to="/overview">
            <Tooltip title="Dashboard" placement="bottom" arrow>
              {" "}
              <HomeRoundedIcon
                sx={{ color: titleColor, fontSize: 30, marginRight: "10px" }}
              />
            </Tooltip>
          </Link>

          <Link to="/transaction">
            <Tooltip title="Transaction List" placement="bottom" arrow>
              <AssignmentRoundedIcon
                sx={{ color: titleColor, fontSize: 30, marginRight: "10px" }}
              />
            </Tooltip>
          </Link>

          <Link to="/graphpage">
            <Tooltip title="Spending Graphs" placement="bottom" arrow>
              <AutoGraphRoundedIcon
                sx={{ color: titleColor, fontSize: 30, marginRight: "10px" }}
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
                sx={{ color: titleColor, fontSize: 30, marginRight: "10px" }}
              />
            </Tooltip>
          </Link>

          <Link to="/signup">
            <Tooltip title="Sign Up" placement="bottom" arrow>
              {" "}
              <AddBoxRoundedIcon
                sx={{ color: titleColor, fontSize: 30, marginRight: "10px" }}
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
  );
}
