import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
const img = process.env.REACT_APP_PUBLIC_URL + "/static/images/";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752
    },
    demo: {
        backgroundColor: theme.palette.background.paper
    },
    title: {
        margin: theme.spacing(4, 0, 2)
    }
}));

function generate(element) {
    return [0, 1, 2].map(value =>
        React.cloneElement(element, {
            key: value
        })
    );
}

function InteractiveList(props) {
    const classes = useStyles();
    const [secondary, dense] = React.useState(false);
    const { children, onClick, color } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant="h6" className={classes.title}>
                        Total Trips
                    </Typography>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            {generate(
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <img
                                                src={img + "taxi.svg"}
                                                alt="driver"
                                                width="30"
                                                height="30"
                                            />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Single-line item"
                                        secondary={
                                            secondary ? "Secondary text" : null
                                        }
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton
                                            edge="end"
                                            aria-label="Delete"
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
export default InteractiveList;
