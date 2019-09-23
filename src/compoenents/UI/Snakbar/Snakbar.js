import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const styles = theme => ({
    close: {
        padding: theme.spacing(2)
    }
});

function NormalSnackbar(props) {
    const { hideDuration, message, classes } = props;

    return (
        <Snackbar
            open={props.open}
            autoHideDuration={hideDuration}
            onClose={props.handleClose}
            ContentProps={{
                "aria-describedby": "message-id"
            }}
            message={<span id="message-id">{message}</span>}
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={classes.close}
                    onClick={props.handleClose}
                >
                    <CloseIcon />
                </IconButton>
            ]}
        />
    );
}

NormalSnackbar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NormalSnackbar);
