import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
    labels: ["Income", "Salary", "Other Expenses"],
    datasets: [
        {
            label: "Accounting - This Month",
            backgroundColor: ["#ef5350", "#ffa726", "#66bb6a"],
            hoverBackgroundColor: ["#ef5350", "#ffa726", "#66bb6a"],
            data: [27, 6, 5],
        },
    ],
};

class Accounting extends React.Component {
    render() {
        return (
            <div className="container-pie" style={{ paddingBottom: "10px" }}>
                <Doughnut
                    data={data}
                    options={{
                        title: {
                            display: true,
                            text: "Accounting - This Month",
                            fontSize: 15,
                        },
                        legend: {
                            display: true,
                            position: "right",
                        },
                    }}
                />
            </div>
        );
    }
}

export default Accounting;
