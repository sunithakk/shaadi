import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, InlineDatePicker } from "material-ui-pickers";

const styles = theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        paddingRight: 10
    },
    dense: {
        marginTop: 14
    },
    menu: {
        width: 200
    }
});

class Input extends React.Component {
    render() {
        const {
            classes,
            name,
            label,
            value,
            isRequired,
            onChange,
            type,
            maxDate,
            minDate,
            children,
            error,
            helperText
        } = this.props;
        let Input = null;

        switch (type) {
            case "input":
                Input = (
                    <TextField
                        id="outlined"
                        autoComplete="off"
                        fullWidth
                        required={isRequired}
                        label={label}
                        value={value}
                        onChange={onChange}
                        helperText={helperText}
                        error={error}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu
                            }
                        }}
                        variant="outlined"
                        className={classNames(classes.textField, classes.dense)}
                        margin="dense"
                    />
                );
                return Input;
            case "select":
                Input = (
                    <TextField
                        id="outlined-select-currency"
                        select
                        required={isRequired}
                        fullWidth
                        label={label}
                        name={name}
                        value={value}
                        onChange={onChange}
                        helperText={helperText}
                        error={error}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu
                            }
                        }}
                        variant="outlined"
                        className={classNames(classes.textField, classes.dense)}
                        margin="dense"
                    >
                        {children}
                    </TextField>
                );
                return Input;
            case "textarea":
                Input = (
                    <TextField
                        id="outlined"
                        fullWidth
                        required={isRequired}
                        label={label}
                        value={value}
                        onChange={onChange}
                        helperText={helperText}
                        error={error}
                        multiline
                        rows="4"
                        variant="outlined"
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu
                            }
                        }}
                        className={classNames(classes.textField, classes.dense)}
                        margin="dense"
                    />
                );
                return Input;
            case "date":
                Input = (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <div className="picker">
                            <InlineDatePicker
                                required={isRequired}
                                fullWidth
                                keyboard
                                clearable
                                variant="outlined"
                                label={label}
                                maxDate={maxDate}
                                minDate={minDate}
                                format="dd/MM/yyyy"
                                InputAdornmentProps={{ position: "start" }}
                                value={value}
                                onChange={onChange}
                                helperText={helperText}
                                error={error}
                                className={classNames(
                                    classes.textField,
                                    classes.dense
                                )}
                                margin="dense"
                            />
                        </div>
                    </MuiPickersUtilsProvider>
                );
                return Input;
            default:
                Input = (
                    <TextField
                        id="outlined"
                        required={isRequired}
                        fullWidth
                        label={label}
                        value={value}
                        onChange={onChange}
                        helperText={helperText}
                        error={error}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu
                            }
                        }}
                        variant="outlined"
                        className={classNames(classes.textField, classes.dense)}
                        margin="dense"
                    />
                );
                return Input;
        }
    }
}

export default withStyles(styles)(Input);
