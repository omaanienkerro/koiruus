import React from 'react';
import PropTypes from 'prop-types';
import deburr from 'lodash/deburr';
import Autosuggest from 'react-autosuggest';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import NativeSelect from '@material-ui/core/NativeSelect';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import withMobileDialog from '@material-ui/core/withMobileDialog';

import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';



/*TODO:::
* Input fieldien helpoertextiin jää viiva alle, miksi?
* paperin pituutta korjata?
* */


const huoltamot = [
    {
        huoltamoid: 1,
        paikkakunta: 'Vaasa',
        huoltamo: 'Kallen paja',
        osoite: 'Havumäentie 59',
        ajat: [
            {
                aikaid: 1,
                aika : "1.2.1981 - 11:14",
            },
            {
                aikaid: 2,
                aika : "1.2.1911 - 16:14",
            },
            {
                aikaid: 3,
                aika : "1.2.1941 - 19:14",
            }

        ]
    },
    {
        huoltamoid: 2,
        paikkakunta: 'Vaasa',
        huoltamo: 'Korjaaja',
        osoite: 'Havumäentie 608',
        ajat: [
            {
                aikaid: 1,
                aika : "1.2.1981 - 11:14",
            },
            {
                aikaid: 2,
                aika : "1.2.1911 - 16:14",
            },
            {
                aikaid: 3,
                aika : "1.2.1941 - 19:14",
            }

        ]

    },
    {
        huoltamoid: 3,
        paikkakunta: 'Laihia',
        huoltamo: 'Kallun paja',
        osoite: 'Havumäentie 607',
        ajat: [
            {
                aikaid: 1,
                aika : "1.2.1981 - 11:14",
            },
            {
                aikaid: 2,
                aika : "1.2.1911 - 16:14",
            },
            {
                aikaid: 3,
                aika : "1.2.1941 - 19:14",
            }

        ]
    },
    {
        huoltamoid: 4,
        paikkakunta: 'Seinäjoki',
        huoltamo: 'Huoltamo',
        osoite: 'Havumäentie 618',
        ajat: [
            {
                aikaid: 1,
                aika : "1.2.1981 - 11:14",
            },
            {
                aikaid: 2,
                aika : "1.2.1911 - 16:14",
            },
            {
                aikaid: 3,
                aika : "1.2.1941 - 19:14",
            }

        ]
    },
    {
        huoltamoid: 5,
        paikkakunta: 'Isokyrö',
        huoltamo: 'Autokorjaamo',
        osoite: 'Havumäentie 699',
        ajat: [
            {
                aikaid: 1,
                aika : "1.2.1981 - 11:14",
            },
            {
                aikaid: 2,
                aika : "1.2.1911 - 16:14",
            },
            {
                aikaid: 3,
                aika : "1.2.1941 - 19:14",
            }

        ]
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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


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
function Transition(props) {
    return <Slide direction="up" {...props} />;
}


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: [],
            huoltamonID: '',
            paikkakuntaValue: '',
            paikkakuntaSuggestions: [],
            huoltamoValue: '',
            huoltamoSuggestions: [],
            hselected:  false,
            haika: '',
            labelWidth: '',
            vapaatajat: [],
            open: false,
            osoite: '',
            valmis: true,
            vikakoodit: [
                {
                    vikakoodiId: 604,
                    vkuvaus : "Karvatura kampikammiossa",
                },
                {
                    vikakoodiId: 808,
                    vkuvaus : "Kissa putkessa",
                },                {
                    vikakoodiId: 999,
                    vkuvaus : "jotain häikkää xD",
                },

            ],
            korjattavatkoodit: [],
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
            huoltamoValue: suggestion.huoltamo,
            huoltamonID: suggestion.huoltamoid,
            vapaatajat: suggestion.ajat,
            osoite: suggestion.osoite,
        });
        console.log(suggestion.huoltamoid)
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

  onnappiklikki = () => {
        alert(this.state);
  };


    onhuoltamoSuggestionSelected = (event, { suggestion }) => {
        this.setState({
            paikkakuntaValue: suggestion.paikkakunta,
            huoltamonID: suggestion.huoltamoid

        });
        console.log(suggestion.huoltamoid)


    };


    handleClickOpen = () => {
        this.setState({ open: true });
    };

    huoltovahvista = () => {
        this.props.palautaprops(true);

    };

    handleClose = () => {
        this.setState({ open: false });
    };

    /*Tää ei toimiinut multiple selectillä????*/
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };


    handleChange2 = event => {
        this.setState({ korjattavatkoodit: event.target.value });
        console.log(this.state.korjattavatkoodit)

    };
    render() {
        const { classes } = this.props;

        const {
            paikkakuntaValue,
            paikkakuntaSuggestions,
            huoltamoValue,
            huoltamonID,
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
            <React.Fragment>

                <Dialog
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    fullWidth

                    /*
                                        onClose={this.handleClose}
                    */
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Vahvista ajanvaraus"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Huoltamo: {this.state.huoltamoValue}<br/>
                            Osoite: {this.state.osoite}<br/>
                            Aika: {this.state.haika}<br/>
                            Korjattavat vikakoodit:
                            {this.state.korjattavatkoodit.map(item => (item+","))}


                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Peruuta
                        </Button>
                        <Button onClick={this.huoltovahvista} color="primary">
                            Vahvista
                        </Button>
                    </DialogActions>
                </Dialog>



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
                        disabled: true,
                        placeholder: this.state.huoltamoValue,
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

                {this.state.huoltamonID ?
                        <div className={classes.section2}>

{/*                            <button onClick={this.onnappiklikki}>
                                höhö
                            </button>*/}

                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
{/*                                <InputLabel

                                    htmlFor="outlined-haika-simple"
                                >
                                    Aika
                                </InputLabel>*/}
                                <Select
                                    value={this.state.haika}
                                    onChange={this.handleChange}
                                    input={
                                        <OutlinedInput
                                            name="haika"
                                            id="outlined-haika-simple"
                                        />
                                    }
                                >
                                    <MenuItem value="">
                                        <em>Aika huollolle</em>
                                    </MenuItem>
                                    {this.state.vapaatajat.map((aika, key) =>
                                        <MenuItem  value={aika.aika}>{aika.aika}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>


                        </div>

                        : null
                    }

                <div className={classes.section2}>
                    <FormControl fullWidth className={classes.formControl} variant="outlined">
                        <InputLabel htmlFor="select-multiple-checkbox">Vikakoodit</InputLabel>
                        <Select
                            multiple
                            value={this.state.korjattavatkoodit}
                            onChange={this.handleChange2}
                            input={<OutlinedInput id="select-multiple-checkbox" />}
                            renderValue={selected => selected.join(', ')}
                            MenuProps={MenuProps}
                        >


                            {this.state.vikakoodit.map(item => (

                                <MenuItem key={item.vikakoodiId} value={item.vikakoodiId}>
                                    <Checkbox checked={this.state.korjattavatkoodit.indexOf(item.vikakoodiId) > -1} />
                                    <ListItemText primary={item.vkuvaus} />
                                </MenuItem>



                            ))}
                        </Select>
                    </FormControl>

                </div>
                {this.state.huoltamonID && this.state.haika && this.state.korjattavatkoodit.length > 0 ?

                <div className={classes.section2}>
                <Button variant="contained" color="primary" fullWidth onClick={this.handleClickOpen}>
                    Varaa aika
                </Button>
                </div>
                    : null
                }

            </React.Fragment>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);