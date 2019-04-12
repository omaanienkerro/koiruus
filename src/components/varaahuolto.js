import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import { NavLink } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { IconButton } from "@material-ui/core";
import ValitseHuoltamo from "./valitsehuoltamo";

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  barText: {
    position: "absolute"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

const steps = [" ", "", ""];

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div style={{ margin: "auto" }}>
          <ValitseHuoltamo />
        </div>
      );
    case 1:
      return "joku kalenteri ratkaisu";
    case 2:
      return "Varauksen tiedot";
    default:
      throw new Error("Error");
  }
}
var bgColors = {
  Default: "#81b71a",
  Blue: "#3F51B5",
  Cyan: "#37BC9B",
  Green: "#8CC152",
  Red: "#E9573F",
  white: "#fff"
};
class Checkout extends React.Component {
  state = {
    activeStep: 0
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <Toolbar
          style={{
            backgroundColor: bgColors.Blue,
            color: bgColors.white,
            padding: "4.5%"
          }}
        >
          <IconButton component={NavLink} to={"/"}>
            <Icon style={{ color: bgColors.white }}>arrow_back</Icon>
          </IconButton>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Typography
              variant="h4"
              color="inherit"
              className={classes.barText}
            >
              Varaa huolto
            </Typography>
          </Grid>
        </Toolbar>

        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h5" variant="h5" align="center">
              Huollon varaus
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              <Step key="1">
                <StepLabel />
              </Step>
              <Step key="2">
                <StepLabel />
              </Step>
              <Step key="3">
                <StepLabel />
              </Step>
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Kiitos huollon varauksesta!
                  </Typography>
                  <Typography variant="subtitle1">
                    Huollon tilausnumerosi on 01234567 ja huoltamon x numero on
                    xxx
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Takasin
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1
                        ? "Varaa huolto"
                        : "Seuraava"}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Checkout);
