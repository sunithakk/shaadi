import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Swiper from "./Swiper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
    paper1: {
        // background: "antiquewhite",
        padding: "20px"
    },
    typo: {
        padding: "10px"
    },
    textField: {
        padding:'10px',
        width: "90%",
        "& + & ": {
            marginTop: "10px"
        }
    }
});

const numbers = [
    {
        value: "1",
        label: "1"
    },
    {
        value: "2",
        label: "2"
    },
    {
        value: "3",
        label: "3"
    },
    {
        value: "4",
        label: "4"
    },
    {
        value: "5",
        label: "5"
    },
    {
        value: "6",
        label: "6"
    },
    {
        value: "7",
        label: "7"
    },
    {
        value: "8",
        label: "8"
    },
    {
        value: "9",
        label: "9"
    },
    {
        value: "10",
        label: "10"
    },
    {
        value: "11",
        label: "11"
    },
    {
        value: "12",
        label: "12"
    },
    {
        value: "13",
        label: "13"
    },
    {
        value: "14",
        label: "14"
    },
    {
        value: "15",
        label: "15"
    },
    {
        value: "16",
        label: "16"
    },
    {
        value: "17",
        label: "17"
    },
    {
        value: "18",
        label: "18"
    },
    {
        value: "19",
        label: "19"
    },
    {
        value: "20",
        label: "20"
    }
];

class Home extends React.Component {
    state = {
        number: ""
    };

    handleChange = name => event => {
        this.setState({
            number: event.target.value
        });
    };
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.paper1}>
                <Paper>
                    <Typography variant="h4" className={classes.typo}>
                        Welcome to Home Page.
                    </Typography>

                    <TextField
                        className={classes.textField}
                        id="outlined-select-currency"
                        select
                        label="Select slides"
                        value={this.state.number}
                        onChange={this.handleChange()}
                        helperText="Please select your slides"
                        margin="normal"
                        variant="outlined"
                    >
                        {numbers.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    {this.state.number ? (
                        <Swiper number={this.state.number} />
                    ) : null}
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
