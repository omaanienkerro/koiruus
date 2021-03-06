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

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = theme => ({
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

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

class Vikakoodit extends React.Component {
state = {
  vikakoodit: [
    {
        vikakoodiId: 604,
        vkuvaus : "Karvatura kampikammiossa",
        aika : "22.04.2019 18:33",
        Vakavuus : "Hätä!",
    },
    {
        vikakoodiId: 808,
        vkuvaus : "Kissa putkessa",
        aika : "22.04.2019 18:33",
        Vakavuus : "Otettava huomioon",
    },                {
        vikakoodiId: 999,
        vkuvaus : "jotain häikkää xD",
        aika : "22.04.2019 18:33",
        Vakavuus : "lievä",
    }
  ]
};

  render() {
    const { classes } = this.props;

    const vikaList = this.state.vikakoodit.map(function(vikakoodit){
      return <ExpansionPanel key={vikakoodit.vikakoodiId}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>Vikakoodi: {vikakoodit.vikakoodiId}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
              <Typography>
              Vikakoodi: {vikakoodit.vikakoodiId}<br/>
                  Aika: {vikakoodit.aika}<br/>
                  Kuvaus:  {vikakoodit.vkuvaus}<br/>
                  Vakavuus:   {vikakoodit.Vakavuus}   <br/>
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
              Vikakoodit
            </Typography>
              {vikaList}
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Vikakoodit.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Vikakoodit);
