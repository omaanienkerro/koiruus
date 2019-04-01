import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocationIcon from "@material-ui/icons/LocationOn";
import BuildIcon from "@material-ui/icons/Build";
import Settings from "@material-ui/icons/Settings";
import RestoreIcon from "@material-ui/icons/Restore";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from "react-router-dom";
import ErrorIcon from "@material-ui/icons/Error";
import classNames from "classnames";

import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import WarningIcon from "@material-ui/icons/Warning";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";

const styles = {
  list: {
    paddingTop: "3.3%",
    paddingBottom: "3.3%",
    MozBorderBottomColors: "Cyan"
  },
  fullList: {
    width: "auto"
  },
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};
var bgColors = {
  Default: "#81b71a",
  Blue: "#3F51B5",
  Cyan: "#37BC9B",
  Green: "#8CC152",
  Red: "#E9573F",
  white: "#fff"
};


const variantIcon = {
  error: ErrorIcon,
  warning: WarningIcon
};

const styles1 = theme => ({
  error: {
    backgroundColor: theme.palette.error.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
});

function MySnackbarContent(props) {
  const { classes, className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(["success", "warning", "error", "info"]).isRequired
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles2 = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

export class Home extends React.Component {
  state = {
    vikakoodit: [
      {
        vikakoodi: "kissa",
        kuvaus: "kissa putkessa",
        vakava: true,
      },
      {
        vikakoodi: "koiruus",
        kuvaus: "koiran karvatura kampikammiossa",
        vakava: true,
        linkki: "http://google.fi"
      }
    ]
  };

  render() {
    const { classes } = this.props;
    let testvar = true;
    return (
      <div>
        <div>
          <Toolbar
            style={{
              backgroundColor: bgColors.Blue,
              color: bgColors.white,
              padding: "4.5%"
            }}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography variant="h4" color="inherit">
                Car Diagnosis
              </Typography>
            </Grid>
          </Toolbar>
          <List style={{paddingTop:0,paddingBottom:0}}>
            <ListItem
              style={styles.list}
              button
              component={NavLink}
              to={"/historia"}
            >
              <ListItemIcon>
                {" "}
                <RestoreIcon />{" "}
              </ListItemIcon>
              <ListItemText primary="Historia" />
            </ListItem>
            <Divider />
            <ListItem
              style={styles.list}
              button
              component={NavLink}
              to={"/sijainti"}
            >
              <ListItemIcon>
                {" "}
                <LocationIcon />{" "}
              </ListItemIcon>
              <ListItemText primary="Sijainti" />
            </ListItem>
            <Divider />
            <ListItem
              style={styles.list}
              button
              component={NavLink}
              to={"/varaahuolto"}
            >
              <ListItemIcon>
                {" "}
                <BuildIcon />{" "}
              </ListItemIcon>
              <ListItemText primary="Varaa huolto" />
            </ListItem>
            <Divider />
            <ListItem
              style={styles.list}
              button
              component={NavLink}
              to={"/omattiedot"}
            >
              <ListItemIcon>
                {" "}
                <Settings />{" "}
              </ListItemIcon>
              <ListItemText primary="Omat tiedot" />
            </ListItem>
          </List>
          <Divider />
          <Divider style={{ color: bgColors.Blue }} />

          <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
            {this.state.vikakoodit.length > 0 && (
              <MySnackbarContentWrapper style={{margin: "auto",
                  width: "80%",textDecoration:'none'}} component={NavLink} to={"/historia"}
                variant={this.state.vikakoodit[1].vakava ? "error" : "warning"}
                message={
                  this.state.vikakoodit[1].vikakoodi +
                  ": " +
                  this.state.vikakoodit[1].kuvaus
                }
              />
            )}

            <List style={{paddingBottom:0}}>
              <Divider />
              <ListItem>
                <ListItemIcon>
                  {" "}
                  <Icon>person</Icon>
                </ListItemIcon>
                <ListItemText primary="Käyttäjän nimi" />

              </ListItem>
            </List>
          </div>
        </div>
      </div>
    );
  }
}
