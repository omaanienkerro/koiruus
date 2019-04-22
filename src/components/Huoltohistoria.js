import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import {NavLink} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import {IconButton} from "@material-ui/core";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const styles = theme => ({



    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    stepper: {
        padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
});


class Huoltohistoria extends React.Component {
    state = {
        huolto: [
            {
                huolto: "Öljykorkin vaihto",
                pvm:"19.2.2019",
                paikka:'Jaripasin Huolto KY',
                kuvaus: "Vaihdettiin öljykorkki",

            },
            {
                huolto: "koiruus",
                pvm:"19.2.2019",
                paikka:'Jaripasin Huolto KY',
                kuvaus: "koiran karvatura kampikammiossa",

            }
        ]
    };


    render() {
        const { classes } = this.props;

        const huoltoList = this.state.huolto.map(function(huolto){
            return <ExpansionPanel key={huolto.huolto}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.heading}>Huolto: {huolto.huolto}, {huolto.pvm}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <Typography>
                        Selitys: {huolto.huolto}<br/>
                        Päivämäärä: {huolto.pvm}<br/>
                        Paikka:  {huolto.paikka}<br/>
                        Kuvaus:   {huolto.kuvaus}   <br/>
                    </Typography>
                </ExpansionPanelDetails>
            </ExpansionPanel>;
        })
        return (
            <React.Fragment>
                <CssBaseline />


                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component="h5" variant="h5" align="center">
                            Huoltohistoria
                        </Typography>
                        <div> <Button style={{marginLeft:"33.3%"}} color={"secondary"}>Lisää uusi<Icon>add</Icon></Button></div>
                          {huoltoList}
                    </Paper>
                </main>
            </React.Fragment>
        );
    }
}

Huoltohistoria.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Huoltohistoria);