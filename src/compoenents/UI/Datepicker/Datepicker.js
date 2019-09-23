import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";

const useStyles = makeStyles({
    grid: {
        width: "60%"
    }
});

function DatePicker(props) {
    const [selectedDate, setSelectedDate] = React.useState(
        new Date("2014-08-18T21:11:54")
    );

    const {label} = props;
    const classes = useStyles();

    function handleDateChange(date) {
        setSelectedDate(date);
    }

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label={label}
            format="MM/dd/yyyy"
            value={selectedDate}
            InputAdornmentProps={{ position: "start" }}
            onChange={date => handleDateChange(date)}
      />
        </MuiPickersUtilsProvider>
    );
}
export default DatePicker;
