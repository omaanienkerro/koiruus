import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocationIcon from '@material-ui/icons/LocationOn';
import BuildIcon from '@material-ui/icons/Build';
import Settings from '@material-ui/icons/Settings';
import RestoreIcon from '@material-ui/icons/Restore';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {NavLink} from "react-router-dom";

import {AppBar} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',

    },
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};
var bgColors = { "Default": "#81b71a",
    "Blue": "#3F51B5",
    "Cyan": "#37BC9B",
    "Green": "#8CC152",
    "Red": "#E9573F",
    "white": "#fff",
};

class TemporaryDrawer extends React.Component {
    state = {
        left: false,
    };

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

    render() {
        const { classes } = this.props;
        let visible = true;
        const sideList = (

            <div className={classes.list}>

                <Toolbar style={{backgroundColor: bgColors.Blue,color: bgColors.white}}>
                    <Typography variant="h6" color="inherit" >
                        Car Diagnosis
                    </Typography>

                </Toolbar>


                <List>

                        <ListItem button component={NavLink} to={"/historia"}>
                            <ListItemIcon> <RestoreIcon /> </ListItemIcon>
                            <ListItemText primary="Historia" />
                        </ListItem>
                    <ListItem button component={NavLink} to={"/sijainti"}>
                        <ListItemIcon> <LocationIcon /> </ListItemIcon>
                        <ListItemText primary="Sijainti" />

                    </ListItem>
                    <ListItem button component={NavLink} to={"/varaahuolto"}>
                        <ListItemIcon> <BuildIcon /> </ListItemIcon>
                        <ListItemText primary="Varaa huolto" />
                    </ListItem>
                    <ListItem button component={NavLink} to={"/omattiedot"}>
                        <ListItemIcon> <Settings /> </ListItemIcon>
                        <ListItemText primary="Omat tiedot" />
                    </ListItem>

                </List>
                <Divider />


                <div style={{position:'absolute',bottom:0,width:'100%'}}>
                    <p> Tänne käyttäjän tiedot</p>
                </div>

            </div>
        );


        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={this.toggleDrawer('left', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                           <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Car Diagnosis
                        </Typography>
                        <Button color="inherit">Kirjaudu</Button>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        {sideList}
                    </div>
                </Drawer>
            </div>
        );
    }
}

TemporaryDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);