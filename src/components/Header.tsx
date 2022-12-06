import React from "react";
import logo from '../utils/images/imgbin_kitchen-png.png';
import classes from './Header.module.css'

const Header = () => {
    return (
  <React.Fragment>
    <div className={classes.header}>
        <div className={classes.logo__container}>
            <img src={logo} alt="logo" />
        </div>
      <h1 className={classes.heading__main}>Fine dining needs fine timing</h1>
    </div>
  </React.Fragment>
    )
};

export default Header;
