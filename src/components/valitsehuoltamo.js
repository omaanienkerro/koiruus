/* eslint-disable react/prop-types, react/jsx-handler-names */

import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const styles = {
  root: {
    width: 300
  },
  slider: {
    padding: "22px 0px"
  }
};

class ValitseHuoltamo extends React.Component {
  state = {
    value: 10,
    maxvalue: 100,
    minvalue: 1
  };

  handleChange = (event, value) => {
    this.setState({ value });
    console.log(value);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        Valitse Huoltamo
        <TextField
          required
          id="Paikkakunta"
          name="Paikkakunta"
          label="Paikkakunta"
          fullWidth
        />
        Tähän react-select tai react-autosuggest
        <TextField
          required
          id="Huoltamo"
          name="Huoltamo"
          label="Huoltamo"
          fullWidth
        />
      </div>
    );
  }
}

ValitseHuoltamo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ValitseHuoltamo);
