import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Outlet, Link, NavLink, Route } from "react-router-dom";
import { Button } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";
import { FaHome } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faStore,
  faStar,
  faShoppingBag,
  faCartPlus,
  faTasks,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import ManageOrder from "../ManageOrder/ManageOrder";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import MyOrder from "../MyOrder/MyOrder";
const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const {logout, admin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <Toolbar />
      <Divider />
      <List>
        {!admin && (
          <Box>
            <ListItem>
              <NavLink style={{ textDecoration: "none" }} to="/">
                <Button variant="text" style={{ color: "inherit" }}>
                  Home
                </Button>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                style={{ textDecoration: "none" }}
                to="/dashboard/review"
              >
                <Button variant="text" style={{ color: "inherit" }}>
                  Add A Review
                </Button>
              </NavLink>
            </ListItem>
            {/* <ListItem>
              <NavLink
                style={{ textDecoration: "none" }}
                to="/dashboard/myOrders"
              >
                <Button variant="text" style={{ color: "inherit" }}>
                  My Order
                </Button>
              </NavLink>
            </ListItem> */}
          </Box>
        )}
        {admin && (
          <Box>
            <ListItem>
              <NavLink
                style={{ textDecoration: "none" }}
                to="/dashboard/addProduct"
              >
                <Button variant="text" style={{ color: "inherit" }}>
                  Add a Product
                </Button>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                style={{ textDecoration: "none" }}
                to="/dashboard/manageProduct"
              >
                <Button variant="text" style={{ color: "inherit" }}>
                  ManageProduct
                </Button>
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                style={{ textDecoration: "none" }}
                to="/dashboard/orders"
              >
                <Button variant="text" style={{ color: "inherit" }}>
                  Manage Order
                </Button>
              </NavLink>
            </ListItem>
            {/* <ListItem>
              <NavLink
                style={{ textDecoration: "none" }}
                to="/dashboard/makeAdmin"
              >
                <Button variant="text" style={{ color: "inherit" }}>
                  Make Admin
                </Button>
              </NavLink>
            </ListItem> */}
          </Box>
        )}

        <ListItem>
          <Button
            onClick={logout}
            variant="text"
            sx={{ color: "text.primary" }}
          >
            <FontAwesomeIcon
              style={{ paddingRight: "10px" }}
              icon={faSignOutAlt}
              size="2x"
            />
            Logout
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {admin && (
            <Typography variant="h6" noWrap component="div">
              Admin Dashboard
            </Typography>
          )}
          {!admin && (
            <Typography variant="h6" noWrap component="div">
              User Dashboard
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {admin && <MakeAdmin></MakeAdmin>}
        {!admin && <MyOrder></MyOrder>}
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
