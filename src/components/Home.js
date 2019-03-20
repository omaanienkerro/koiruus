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
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {NavLink} from "react-router-dom";


const styles = {
    list: {
       paddingTop:"3%"
        ,paddingBottom:"3%"
        ,MozBorderBottomColors:"Cyan"

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
    }
var bgColors = { "Default": "#81b71a",
    "Blue": "#3F51B5",
    "Cyan": "#37BC9B",
    "Green": "#8CC152",
    "Red": "#E9573F",
    "white": "#fff",
};
export class Home extends React.Component {
    render() {
        const { classes } = this.props;
        let testvar = true;
        return(
            <div>
                <div >

                    <Toolbar style={{backgroundColor: bgColors.Blue,color: bgColors.white,padding:"4.5%"}}>
                        <Grid
                            container
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >
                            <Typography variant="h4" color="inherit" >
                                Car Diagnosis
                            </Typography>
                        </Grid>


                    </Toolbar>


                    <List >

                        <ListItem style={styles.list} button component={NavLink} to={"/historia"}>
                            <ListItemIcon> <RestoreIcon /> </ListItemIcon>
                            <ListItemText primary="Historia" />
                        </ListItem>
                        <Divider />
                        <ListItem style={styles.list} button component={NavLink} to={"/sijainti"}>
                            <ListItemIcon> <LocationIcon /> </ListItemIcon>
                            <ListItemText primary="Sijainti" />
                        </ListItem>
                        <Divider />
                        <ListItem style={styles.list} button component={NavLink} to={"/varaahuolto"}>
                            <ListItemIcon> <BuildIcon /> </ListItemIcon>
                            <ListItemText primary="Varaa huolto" />
                        </ListItem>
                        <Divider />
                        <ListItem style={styles.list} button component={NavLink} to={"/omattiedot"}>
                            <ListItemIcon> <Settings /> </ListItemIcon>
                            <ListItemText primary="Omat tiedot" />
                        </ListItem>

                    </List>
                    <Divider />
                    <Divider style={{color:bgColors.Blue}}/>


                    <div style={{position:'fixed',bottom:0,width:'100%'}}>

                        <List>

                            <ListItem style={{backgroundColor:bgColors.Red,paddingTop:"3%",paddingBottom:"3%"}}>
                                <ListItemIcon> <Icon>warning</Icon></ListItemIcon>
                                <ListItemText primary="Virhekoodi:12376 - Lisätieto: Virhekoodi"/>

                            </ListItem>

                            <ListItem >
                                <ListItemIcon> <Icon>person</Icon></ListItemIcon>
                                <ListItemText primary="Käyttäjän nimi"/>
                                <ListItemIcon> <Icon>exit_to_app</Icon></ListItemIcon>
                            </ListItem>
                        </List>
                    </div>

                </div>
            </div>
        );
    }
}