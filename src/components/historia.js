import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import {NavLink} from "react-router-dom";
import {IconButton} from "@material-ui/core";

const styles = {
    card: {
        width: '30px'
    },
    media: {
        height: 140,
    },}
var bgColors = { "Default": "#81b71a",
    "Blue": "#3F51B5",
    "Cyan": "#37BC9B",
    "Green": "#8CC152",
    "Red": "#E9573F",
    "white": "#fff",
};
export class Historia extends React.Component {
    render() {
        var text ="jotain"
        return(
            <div>
                <Toolbar style={{backgroundColor: bgColors.Blue,color: bgColors.white,padding:"4.5%"}}>
                    <IconButton component={NavLink} to={"/"}><Icon style={{color:bgColors.white}}>arrow_back</Icon></IconButton>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Typography variant="h4" color="inherit" >
                            Historia
                        </Typography>
                    </Grid>


                </Toolbar>

            </div>
        );
    }
}