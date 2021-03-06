import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import {Link as RouterLink, NavLink} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Link from '@material-ui/core/Link';
import Fab from '@material-ui/core/Fab';
import { sizing } from '@material-ui/system';


import Palkki from './palkki';
import Huoltamo from './huoltamo';

/*
* TODO::::
* - ajanvalinta & vikakoodi kenttänä
* */
const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,

    },
    appBar: {
        position: 'relative',
    },
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    cardGrid: {
        padding: `${theme.spacing.unit * 3}px 0`,
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },

    section1: {
        margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
    },
    section2: {
        margin: theme.spacing.unit * 2,
    },
    section4: {
        margin: theme.spacing.unit * 1,
        textAlign: 'center',
    },
    section3: {
        margin: `${theme.spacing.unit * 1}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
    },

    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 6,
    },
});

var bgColors = { "Default": "#81b71a",
    "Blue": "#3F51B5",
    "Cyan": "#37BC9B",
    "Green": "#8CC152",
    "Red": "#E9573F",
    "white": "#fff",
};


class KirjanTiedot extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            huoltamonID: '',
            paikkakuntaValue: '',
            huoltamoValue: '',
            haika: '',
            vapaatajat: [],
            osoite: '',
            valmis: [],
            korjattavatkoodit: [],
            lapsonen: [
                {
                    valmis: false,
                }
            ],
    };
    };



    callbakki = (data) => {
        this.setState({lapsonen: data});
    };

    callbakki1 = (dataFromChild) => {
        this.setState({ listDataFromChild: dataFromChild });
    };



    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };



    onnappiklikki = () => {
        console.log(this.state.lapsonen);
    };




    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
            <Palkki otsikko="Varaa huolto"/>

                <main>
                    <div className={classNames(classes.layout, classes.cardGrid)}>
                        <Grid container spacing={16}>
                            <Grid item xs={12}>
                                <div>
                                    <Paper className={classes.root} elevation={1} height="100%">
                                        <Typography variant="h5" align="center" color="textPrimary" paragraph>


                                            {this.state.valmis ?

                                                "Huolto varattu"

                                                : "Kiitos varauksesta!"
                                            }
                                        </Typography>

                                        <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                        </Typography>
                                        <Divider variant="middle" />
                                        {this.state.lapsonen.valmis ?

                                            <div>
                                                <Typography variant="subtitle1" align="center" paragraph>
                                                {this.state.lapsonen.huoltamoValue}<br/>
                                                {this.state.lapsonen.osoite +" - "+ this.state.lapsonen.paikkakuntaValue}<br/>
                                                {this.state.lapsonen.haika}<br/><br/>
                                                Korjattavat vikakoodit: {this.state.lapsonen.korjattavatkoodit.map(item => (item+","))}


                                            </Typography>
                                                <Button variant="contained" color="primary" fullWidth component={RouterLink} to={"/"}>
                                                    Palaa
                                                </Button></div>

                                            : <Huoltamo palautaprops={this.callbakki}/>
                                        }

          {/*                              <Huoltamo palautaprops={this.callbakki}/>*/}
                                        <div className={classes.section4}>
                                            {/*                               <Typography gutterBottom variant="body2" >
                                                    Rekisteröidy
                                                </Typography>
                                                <Typography gutterBottom variant="body2">
                                                    Unohditko salasanasi?
                                                </Typography>*/}


                                        </div>
          {/*                              <div className={classes.section3}>
                                            <Button variant="contained" color="primary" fullWidth>
                                                Varaa aika
                                            </Button>
                                        </div>*/}

                                    </Paper>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                </main>
            </React.Fragment>

        );
    }
}

KirjanTiedot.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KirjanTiedot);