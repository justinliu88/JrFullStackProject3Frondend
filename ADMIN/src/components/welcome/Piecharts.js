import React from "react";
//import PropTypes from "prop-types";
import Paper from "@material-ui/core/Paper";
//import { withStyles } from "@material-ui/core/styles";
import Percentage from "./Percentageconver";
import Salesdistribution from "./Salesdistribution";
import Accounting from "./Accounting";
import { Grid } from "@material-ui/core";

// const styles = () => ({
//     paper: {
//         maxWidth: 936,
//         margin: "auto",
//         overflow: "hidden",
//         display: "flex",
//         flexDirection: "row",
//     },
// });

function Piecharts(props) {
    //const { classes } = props;

    return (
        // <Paper className={classes.paper}>
        //     <Percentage />
        //     <Percentage />
        //     <Percentage />
        // </Paper>

        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
        >
            <Paper>
                <Percentage />
            </Paper>
            <Paper>
                <Salesdistribution />
            </Paper>
            <Paper>
                <Accounting />
            </Paper>
        </Grid>
    );
}

// Piecharts.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Piecharts);
export default Piecharts;
