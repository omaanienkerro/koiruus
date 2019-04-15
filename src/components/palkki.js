import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from "react-router-dom";
import Icon from "@material-ui/core/Icon";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';




const styles = {

    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
        textAlign: 'center',

    },
    menuButton: {
        marginLeft: -102,
        marginRight: 20,
    },
};

var bgColors = {
    Default: "#81b71a",
    Blue: "#3F51B5",
    Cyan: "#37BC9B",
    Green: "#8CC152",
    Red: "#E9573F",
    white: "#fff"
};


function palkki(props) {
    const { classes } = props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar variant="regular">
                        <IconButton component={NavLink} to={"/"}>
                            <Icon style={{ color: bgColors.white }}>arrow_back</Icon>
                        </IconButton>


                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            {props.otsikko}
                        </Typography>


                    </Toolbar>
                </AppBar>
            </div>

        );
}



palkki.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(palkki);