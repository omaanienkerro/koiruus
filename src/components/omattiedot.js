import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import {NavLink} from "react-router-dom";
import {IconButton, Paper} from "@material-ui/core";
import Palkki from "./palkki"

const styles = {
    card: {
        width: '30px'
    },
    media: {
        height: 140,
    },
text:{
        width: "80%"
}}
var bgColors = { "Default": "#81b71a",
    "Blue": "#3F51B5",
    "Cyan": "#37BC9B",
    "Green": "#8CC152",
    "Red": "#E9573F",
    "white": "#fff",
};
export class OmatTiedot extends React.Component {
    render() {
        var text ="jotain"
        return(
            <div>
<Palkki otsikko="Omat tiedot"/>
                <p></p>
                <IconButton style={{float:"right"}} variant="contained" color="secondary" component={NavLink} to="/kirjaudu"><Icon>exit_to_app</Icon></IconButton>
                
                <Grid
                    container
                    direction="column"
                    justify="space-between"
                    alignItems="center"

                >

                    <TextField
                        required
                        id="outlined-firstName"
                        name="firstName"
                        label="Etunimi"
                        fullWidth
                        style={styles.text}
                        autoComplete="fname"
                        variant="outlined"
                    />
<br/>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Sukunimi"
                        style={styles.text}
                        autoComplete="lname"
                        variant="outlined"
                    />
                    <br/>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Sähköposti"
                        type="email"
                        style={styles.text}
                        autoComplete="lname"
                        variant="outlined"
                    />
                    <br/>
                    <TextField
                        required
                        id="register"
                        name="register"
                        label="Auton rekisterinumero"
                        style={styles.text}
                        autoComplete="billing country"
                        variant="outlined"
                    />
                    <br/>
                    <TextField
                        required
                        id="adornment-password"
                        name="password"
                        type="password"
                        label="Salasana"
                        style={styles.text}
                        autoComplete="billing country"
                        variant="outlined"
                    />
                    <br/>
                    <TextField
                        required
                        id="adornment-password"
                        name="passwordag"
                        type="passwordag"
                        label="Salasana uudelleen"
                        style={styles.text}
                        autoComplete="billing country"
                        variant="outlined"
                    />
                    <br/>
                    <div style={styles.text}>
                        <Button variant="contained" color="primary">Tallenna</Button> 
               
                    </div>

                </Grid>
            </div>
        );
    }
}