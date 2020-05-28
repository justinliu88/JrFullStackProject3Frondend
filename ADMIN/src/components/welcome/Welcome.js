import React from "react";
import Piecharts from "./Piecharts";
import Container from "@material-ui/core/Container";
import Linecharts from "./Linecharts";

class Welcome extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Piecharts />
                </Container>

                <Container>
                    <Linecharts />
                </Container>
            </div>
        );
    }
}

export default Welcome;
