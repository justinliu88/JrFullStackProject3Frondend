import React from "react";
import { Pie } from "react-chartjs-2";

const state = {
    labels: ["Visits", "Orders"],
    datasets: [
        {
            label: "Percentage Conversion",
            backgroundColor: ["#B21F00", "#C9DE00"],
            hoverBackgroundColor: ["#501800", "#4B5000"],
            data: [273, 62],
        },
    ],
};

class Percentage extends React.Component {
    render() {
        return (
            <div className="container-pie">
                <Pie
                    data={state}
                    options={{
                        title: {
                            display: true,
                            text: "Percentage Conversion",
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

export default Percentage;
