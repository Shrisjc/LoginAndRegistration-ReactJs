import React, { useState, useContext } from "react";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../components/pages/Auth/LoginContext";
export default function Navbar() {
  const { isLoggedIn, userEmail, handleLogout } = useContext(LoginContext);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MyApp
            </Typography>
            <Button
              component={NavLink}
              to="/"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "green" : "" };
              }}
              sx={{ color: "white" }}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/contact"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "green" : "" };
              }}
              sx={{ color: "white" }}
            >
              Contact
            </Button>
            {isLoggedIn ? (
              <Button
                onClick={handleLogout}
                activeClassName="active" // Apply activeClassName to the Logout button
                sx={{ color: "white" }}
              >
                {userEmail}
                <br />
                Logout
              </Button>
            ) : (
              <Button
                component={NavLink}
                to="/loginRegister"
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? "green" : "" };
                }}
                sx={{ color: "white" }}
              >
                Login / Register
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
