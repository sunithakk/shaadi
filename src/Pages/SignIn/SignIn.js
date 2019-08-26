import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import Form from "./Login";
import { Formik } from "formik";
import * as Yup from "yup";

const styles = theme => ({
    paper1: {
        backgroundColor: theme.palette.common.neutral,
        height: "677px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
            "url(https://img2.shaadi.com/assests/2019/images/60-lakh-home-banner-v2.jpg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        [theme.breakpoints.down("sm")]: {
            height: "200px"
        }
    },
    fields: {
        marginTop: theme.spacing(2)
    },
    form: {
        background: "white",
        padding: "20px",
        borderRadius: "10px",

        [theme.breakpoints.down("sm")]: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
            marginTop: "1px"
        }
    },
    title: {
        paddingTop: theme.spacing(3)
    },
    textField: {
        width: "100%",
        "& + & ": {
            marginTop: "10px"
        }
    },
    UserManagementButton: {
        marginTop: theme.spacing(2),
        width: "100%"
    },
    contentBody: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "560px",
        textAlign: "center",
        [theme.breakpoints.down("sm")]: {
            minHeight: "360px"
        }
    }
});
const validationSchema = Yup.object({
    username: Yup.string()
        .matches(/(shaadi)/)
        .required("Enter your username")
        .min(2, "user name should contain at least 2 character"),

    password: Yup.number()
      
        .required("No password provided.")
        .min(123, "Password is too short - should be 3 chars minimum.")
        .max(123)
});

class SignIn extends React.Component {
    submit = data => {
        console.log(data);
        this.props.history.push("dashboard");
    };

    render() {
        const { classes } = this.props;
        const values = {
            username: "",
            password: ""
        };
        return (
            <div>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <div className={classes.paper1} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={classes.contentBody}>
                            <form className={classes.form}>
                                <Typography
                                    className={classes.title}
                                    variant="h6"
                                >
                                    Login
                                </Typography>

                                <div className={classes.fields}>
                                    <Formik
                                        render={props => <Form {...props} />}
                                        initialValues={values}
                                        validationSchema={validationSchema}
                                        onSubmit={this.submit}
                                        className={classes.textField}
                                    />
                                </div>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(SignIn);
