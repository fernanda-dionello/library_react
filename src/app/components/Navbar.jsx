import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import { useStyles } from './Navbar.styles'


function Navbar() {
  const navbar = useStyles();
  return (
    <div className={navbar.root}>
      <AppBar position="static" className={navbar.toolbar}>
        <Toolbar>
          <IconButton edge="start" className={navbar.menuButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Link className={navbar.navlink} to="/">
            <Typography variant="h6" className={navbar.title}>
              Library
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;