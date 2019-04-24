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
import { Link as RouterLink, Redirect } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Link from '@material-ui/core/Link';
import Fab from '@material-ui/core/Fab';
import axios from "axios";



/*
TODO:::::
    - Funktio kirjautumiseen & auth
    - ?
    - ?

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

    state = {
        email: '',
        password: '',
        showPassword: false,
    };


    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handlekirjaudu = () => {
        const user = {
            email: this.state.email,
            password: this.state.password,
        };

        axios
            .post("http://laravel.outgoingtraffic.bid//api/user/login/", { user })
            .then(response => {
                console.log(response);
                return response;
            })
            .then(json => {
                if (json.data.success) {
/*
                    console.log(json.data.data)
*/
                    this.props.palautaprops(json.data.data);

                    /*                    alert("Login Successful!");
                                        const { name, id, email, auth_token } = json.data.data;

                                        let userData = {
                                            name,
                                            id,
                                            email,
                                            auth_token,
                                            timestamp: new Date().toString()
                                        };
                                        let appState = {
                                            isLoggedIn: true,
                                            user: userData
                                        };
                                        // save app state with user date in local storage
                                        localStorage["appState"] = JSON.stringify(appState);
                                        this.setState({
                                            isLoggedIn: appState.isLoggedIn,
                                            user: appState.user
                                        });*/
                }
            })
    };




    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <CssBaseline />
                <Toolbar style={{backgroundColor: bgColors.Blue,color: bgColors.white,padding:"14.5%"}}>
                    <Grid
                        container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >
                        <Typography variant="h3" color="inherit">
                            CarDiagnosis
                        </Typography>
                    </Grid>
                </Toolbar>

                    <main>



                        <div className={classNames(classes.layout, classes.cardGrid)}>
                            <Grid container spacing={16}>
                                <Grid item xs={12}>
                                    <div>
                                        <Paper className={classes.root} elevation={1}>
                                            <Typography variant="h5" align="center" color="textPrimary" paragraph>
                                                Kirjaudu
                                            </Typography>


                                            <Typography variant="h6" align="center" color="textSecondary" paragraph>
                                            </Typography>
                                            <Divider variant="middle" />

                                            <div className={classes.section2}>

                                            <TextField
                                                id="outlined-adornment-email"
                                                className={classNames(classes.margin, classes.textField)}
                                                variant="outlined"
                                                label="Käyttäjätunnus"
                                                fullWidth
                                                value={this.state.email}
                                                onChange={this.handleChange('email')}
                                                InputProps={{
/*
                                                    endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
*/
                                                }}
                                            />
                                            </div>
                                            <div className={classes.section2}>
                                            <TextField
                                                id="outlined-adornment-password"
                                                className={classNames(classes.margin, classes.textField)}
                                                variant="outlined"
                                                type={this.state.showPassword ? 'text' : 'password'}
                                                label="Salasana"
                                                fullWidth
                                                value={this.state.password}
                                                onChange={this.handleChange('password')}
                                                InputProps={{
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="Toggle password visibility"
                                                                onClick={this.handleClickShowPassword}
                                                            >
                                                                {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                            />
                                            </div>
                                            <div className={classes.section4}>
                 {/*                               <Typography gutterBottom variant="body2" >
                                                    Rekisteröidy
                                                </Typography>
                                                <Typography gutterBottom variant="body2">
                                                    Unohditko salasanasi?
                                                </Typography>*/}
                                                <Link component={RouterLink} to="/salasanapalautus"  variant="body2">
                                                    Unohditko salasanasi?
                                                </Link>
                                            </div>
                                            <div className={classes.section3}>
                                                <Button variant="contained" color="primary" fullWidth onClick={this.handlekirjaudu}>
                                                    Kirjaudu
                                                </Button>
                                            </div>

                                            <div className={classes.section3}>
                                                <Button variant="contained" color="default"  component={RouterLink} to={'/rekkaus'} fullWidth>
                                                    Rekisteröidy
                                                </Button>
                                            </div>

                                        </Paper>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                        {
                            localStorage.getItem('appState')
                                ? <Redirect to={{ pathname: '/etusivu'}}/>
                                : null
                            }
                    </main>
            </React.Fragment>

        );
    }
}

KirjanTiedot.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(KirjanTiedot);