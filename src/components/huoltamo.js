import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';



const huoltamot = [
    {
        paikkakunta: 'Vaasa',
        huoltamo: 'Kallen paja'
    },
    {
        paikkakunta: 'Vaasa',
        huoltamo: 'Korjaaja'
    },
    {
        paikkakunta: 'Laihia',
        huoltamo: 'Kallun paja'
    },
    {
        paikkakunta: 'Seinäjoki',
        huoltamo: 'Huoltamo'
    },
    {
        paikkakunta: 'Isokyrö',
        huoltamo: 'Autokorjaamo'
    },

];

const styles = theme => ({
    root: {
        height: 250,
        flexGrow: 1,
    },
    container: {
        position: 'relative',
    },
    suggestionsContainerOpen: {
        position: 'absolute',
        zIndex: 1,
        marginTop: theme.spacing.unit,
        left: 0,
        right: 0,
    },
    suggestion: {
        display: 'block',
    },
    suggestionsList: {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
    },
    divider: {
        height: theme.spacing.unit * 2,
    },
    section2: {
        margin: theme.spacing.unit * 2,
    },
});

function renderInputComponent(inputProps) {
    const { classes, inputRef = () => {}, ref, ...other } = inputProps;



    return (
        <TextField
            fullWidth
            variant="outlined"
            InputProps={{
                inputRef: node => {
                    ref(node);
                    inputRef(node);
                },
                classes: {
                    input: classes.input,
                },
            }}
            {...other}
        />
    );
}

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());
    const regex = new RegExp('^' + escapedValue, 'i');

    return huoltamot.filter(user => regex.test(user.paikkakunta) || regex.test(user.huoltamo));
}

function getSuggestionpaikkakunta(suggestion) {
    return suggestion.paikkakunta;
}

function getSuggestionhuoltamo(suggestion) {
    return suggestion.huoltamo;
}

function renderSuggestion(suggestion) {
    return (
        <Paper  square>

        <MenuItem component="div">
            <div>

        <span style={{ fontWeight: 500 }}>
            {suggestion.paikkakunta} - {suggestion.huoltamo}</span>
            </div>
        </MenuItem>
        </Paper>
    );
}

/*function renderSuggestion(suggestion, { query, isHighlighted }) {
    const matches = match(suggestion.label, query);
    const parts = parse(suggestion.label, matches);

    return (
        <MenuItem selected={isHighlighted} component="div">
            <div>
                {parts.map((part, index) =>
                        part.highlight ? (
                            <span key={String(index)} style={{ fontWeight: 500 }}>
              {part.text}
            </span>
                        ) : (
                            <strong key={String(index)} style={{ fontWeight: 300 }}>
                                {part.text}
                            </strong>
                        ),
                )}
            </div>
        </MenuItem>
    );
}*/

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            paikkakuntaValue: '',
            paikkakuntaSuggestions: [],
            huoltamoValue: '',
            huoltamoSuggestions: []
        };
    }

    onpaikkakuntaChange = (event, { newValue }) => {
        this.setState({
            paikkakuntaValue: newValue
        });
    };

    onhuoltamoChange = (event, { newValue }) => {
        this.setState({
            huoltamoValue: newValue
        });
    };

    onpaikkakuntaSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            paikkakuntaSuggestions: getSuggestions(value)
        });
    };

    onpaikkakuntaSuggestionsClearRequested = () => {
        this.setState({
            paikkakuntaSuggestions: []
        });
    };

    onpaikkakuntaSuggestionSelected = (event, { suggestion }) => {
        this.setState({
            huoltamoValue: suggestion.huoltamo
        });
    };

    onhuoltamoSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            huoltamoSuggestions: getSuggestions(value)
        });
    };

    onhuoltamoSuggestionsClearRequested = () => {
        this.setState({
            huoltamoSuggestions: []
        });
    };

    onhuoltamoSuggestionSelected = (event, { suggestion }) => {
        this.setState({
            paikkakuntaValue: suggestion.paikkakunta
        });
    };


    render() {
        const { classes } = this.props;

        const {
            paikkakuntaValue,
            paikkakuntaSuggestions,
            huoltamoValue,
            huoltamoSuggestions
        } = this.state;

        const paikkakuntainputprops = {
            placeholder: "paikkakunta",
            value: paikkakuntaValue,
            onChange: this.onpaikkakuntaChange
        };
        const huoltamoinputprops = {
            placeholder: "huoltamo",
            value: huoltamoValue,
            onChange: this.onhuoltamoChange
        };


        const autosuggestProps = {
            renderInputComponent,
        };

        return (
            <div className={classes.root}>
                <div className={classes.section2}>

                <Autosuggest
                    {...autosuggestProps}
                    inputProps={{
                        classes,
                        placeholder: 'Paikkakunta',
                        value: this.state.paikkakuntaValue,
                        onChange: this.onpaikkakuntaChange,
                        paikkakuntainputprops,

                    }}
                    suggestions={paikkakuntaSuggestions}
                    onSuggestionsFetchRequested={this.onpaikkakuntaSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onpaikkakuntaSuggestionsClearRequested}
                    onSuggestionSelected={this.onpaikkakuntaSuggestionSelected}
                    getSuggestionValue={getSuggestionpaikkakunta}
                    renderSuggestion={renderSuggestion}

                    theme={{
                        container: classes.container,
                        suggestionsContainerOpen: classes.suggestionsContainerOpen,
                        suggestionsList: classes.suggestionsList,
                        suggestion: classes.suggestion,
                    }}
                />


</div>
                <div className={classes.section2}>

                <Autosuggest
                    {...autosuggestProps}
                    inputProps={{huoltamoinputprops,
                        classes,
                        placeholder: 'Huoltamo',
                        value: this.state.huoltamoValue,
                        onChange: this.onhuoltamoChange,
                    }}

                    suggestions={huoltamoSuggestions}
                    onSuggestionsFetchRequested={this.onhuoltamoSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onhuoltamoSuggestionsClearRequested}
                    onSuggestionSelected={this.onhuoltamoSuggestionSelected}
                    getSuggestionValue={getSuggestionhuoltamo}
                    renderSuggestion={renderSuggestion}
                    theme={{
                        container: classes.container,
                        suggestionsContainerOpen: classes.suggestionsContainerOpen,
                        suggestionsList: classes.suggestionsList,
                        suggestion: classes.suggestion,

                    }}
                />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);