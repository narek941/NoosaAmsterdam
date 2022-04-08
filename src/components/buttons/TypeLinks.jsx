import React from "react";
import { Button } from "@material-ui/core";
import { NavLink as RouterNavLink } from "react-router-dom";

const TypeLinks = ({ type, to, children, ...props }) => {
  const mystyleDefault = {
    textTransform: "capitalize",
    color: "#F5F3F2",
    justifyContent: "start",
    padding: 0,
  };

  const mystyle = {
    textTransform: "capitalize",
    color: "#F5F3F2",
    justifyContent: "center",
    padding: "5px 16px",
    textAlign: "center",
  };
  const mystyleBig = {
    opacity: 1,
    textTransform: "capitalize",
    color: "#F5F3F2",
    justifyContent: "center",
    fontSize: "24px",
  };

  switch (type) {
    case "navigation":
      return (
        <Button style={mystyle} component={RouterNavLink} to={to}>
          {children}
        </Button>
      );
    case "navigationBig":
      return (
        <Button style={mystyleBig} component={RouterNavLink} to={to}>
          {children}
        </Button>
      );
    case "footer":
      return (
        <Button style={mystyleDefault} component={RouterNavLink} to={to}>
          {children}
        </Button>
      );
    default:
      return (
        <Button style={mystyle} color="inherit">
          {children}
        </Button>
      );
  }
};

export default TypeLinks;
