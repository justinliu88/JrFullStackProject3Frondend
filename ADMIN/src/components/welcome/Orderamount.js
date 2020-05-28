import React from "react";
import { Line } from "react-chartjs-2";
//import { MDBContainer } from "mdbreact";
import Paper from "@material-ui/core/Paper";

class Orderamount extends React.Component {
    state = {
        dataLine: {
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
            ],
            datasets: [
                {
                    label: "Sales",
                    fill: false,
                    lineTension: 0.4,
                    //backgroundColor: "#66bb6a",
                    borderColor: "white",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "white",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 8,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "white",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [28, 48, 40, 19, 86, 27, 90],
                },
            ],
        },
    };

    render() {
        return (
            <Paper style={{ backgroundColor: "#ffa726" }}>
                <Line
                    data={this.state.dataLine}
                    options={{ responsive: true }}
                />
            </Paper>
        );
    }
}

export default Orderamount;
