import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ProfileIcon from '@material-ui/icons/Person'
import Drawer from "./drawer";


export const Header = (props) =>{
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton  color="inherit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" color="inherit" >
                        Car Diagnosis
                    </Typography>

                </Toolbar>
            </AppBar>

        </div>
    );
};