import React from "react";
//import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Subscribers from "./Subscribers";
import Orderamount from "./Orderamount.js";
import { Grid } from "@material-ui/core";

class Linecharts extends React.Component {
    render() {
        return (
            <div>
                <Grid
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                        paddingTop: "40px",
                    }}
                >
                    <Container style={{ paddingLeft: "0px" }}>
                        <Subscribers />
                    </Container>
                    <Container style={{ paddingRight: "0px" }}>
                        <Orderamount />
                    </Container>
                </Grid>
            </div>
        );
    }
}

export default Linecharts;
