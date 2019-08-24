import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    textField: {
        width: "80%",
        height: "50%",
        "& + & ": {
            margin: theme.spacing(2)
        }
    },

    signInButton: {
        marginTop: theme.spacing(2),
        width: "80%",
        background: "#8cc449",
        height: "50%",
        color: "white"
    }
}));

export default function SignIn(props) {
    const classes = useStyles();

    const {
        values: { username, password },
        errors,
        touched,
        handleSubmit,
        handleChange,
        isValid,
        setFieldTouched
    } = props;

    console.table(props);

    const change = (name, e) => {
        console.log(name);
        e.persist();
        handleChange(e);
        setFieldTouched(name, true, false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                className={classes.textField}
                name="username"
                helperText={
                    touched.username
                        ? errors.username
                        : "Please Enter Correct User Name"
                }
                error={Boolean(errors.username)}
                label="UserName"
                fullWidth
                value={username}
                onChange={handleChange}
                autoComplete="off"
            />

            <TextField
                className={classes.textField}
                name="password"
                helperText={
                    touched.password
                        ? errors.password
                        : "Please Enter correct Password"
                }
                error={Boolean(errors.password)}
                label="Password"
                fullWidth
                type="password"
                value={password}
                autoComplete="off"
                onChange={handleChange}
            />

            <Button
                type="submit"
                fullWidth
                variant="raised"
                color="primary"
                disabled={!isValid}
                className={classes.signInButton}
            >
                Submit
            </Button>
        </form>
    );
}
