import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Drawer, IconButton, List, ListItemButton } from "@mui/material";
import { Menu } from "@mui/icons-material";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const activeLink = {
    textDecoration: "underline",
    textDecorationThickness: "5px",
  };
  return (
    <Box bgcolor="#54AEB2" py={2} px="2rem">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mx={2}
      >
        <NavLink
          exact
          to="/"
          activeStyle={activeLink}
          style={{ textDecoration: "none" }}
        >
          <Typography variant="h6" component="span" color="#fff">
            avcic
          </Typography>
        </NavLink>
        <Box display="flex">
          <Box
            display={{ xs: "none", sm: "flex" }}
            justifyContent="space-evenly"
            mr="1rem"
            className="navlinks"
          >
            <NavLink
              activeStyle={activeLink}
              to="/attendance"
              style={{ textDecoration: "none" }}
            >
              <Typography variant="body1" component="span" mr={2}>
                Clock In
              </Typography>
            </NavLink>
            <NavLink
              activeStyle={activeLink}
              to="/employees"
              style={{ textDecoration: "none" }}
            >
              <Typography variant="body1" component="span" mr="1rem">
                Report
              </Typography>
            </NavLink>
            <NavLink
              activeStyle={activeLink}
              to="/profile"
              style={{ textDecoration: "none" }}
            >
              <Typography mr="1rem" variant="body1" component="span">
                Profile
              </Typography>
            </NavLink>
            <NavLink
              activeStyle={activeLink}
              to="/login"
              style={{ textDecoration: "none" }}
            >
              <Typography variant="body1" component="span">
                Login
              </Typography>
            </NavLink>
          </Box>
          <Box display={{ xs: "flex", sm: "none" }}>
            <IconButton edge="end" onClick={toggleDrawer} aria-label="menu">
              <Menu style={{ color: "white" }} />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
              <List
                sx={{
                  bgcolor: "#fff",
                  width: 250,
                  minHeight: "100vh",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  marginTop: "1rem",
                  padding: "1rem",
                }}
              >
                <NavLink
                  exact
                  activeStyle={activeLink}
                  to="/"
                  style={{ textDecoration: "none" }}
                  className="active-link"
                >
                  <ListItemButton
                    sx={{
                      color: "#325F70",
                      "& .Mui-hover": {
                        bgColor: "#54AEB2",
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      component="span"
                      color="#325F70"
                    >
                      Home
                    </Typography>
                  </ListItemButton>
                </NavLink>
                <NavLink
                  activeStyle={activeLink}
                  to="/employees"
                  style={{ textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{
                      color: "#325F70",
                      "& .Mui-hover": {
                        bgColor: "#54AEB2",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography variant="body1" component="span">
                      Reports
                    </Typography>
                  </ListItemButton>
                </NavLink>
                <Link
                  activeStyle={activeLink}
                  to="/profile"
                  style={{ textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{
                      color: "#325F70",
                      "& .Mui-hover": {
                        bgColor: "#54AEB2",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography variant="body1" component="span">
                      Profile
                    </Typography>
                  </ListItemButton>
                </Link>
                <Link
                  activeStyle={activeLink}
                  to="/login"
                  style={{ textDecoration: "none" }}
                >
                  <ListItemButton
                    sx={{
                      color: "#325F70",
                      "& .Mui-hover": {
                        bgColor: "#54AEB2",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Typography variant="body1" component="span">
                      Login
                    </Typography>
                  </ListItemButton>
                </Link>
              </List>
            </Drawer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Header;
