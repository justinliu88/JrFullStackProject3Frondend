import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
    labels: ["Visits", "Orders"],
    datasets: [
        {
            label: "Percentage Conversion - Today",
            backgroundColor: ["#16d9e3", "#2b5876"],
            hoverBackgroundColor: ["#16d9e3", "#2b5876"],
            data: [273, 62],
        },
    ],
};

class Percentage extends React.Component {
    render() {
        return (
            <div className="container-pie" style={{ paddingBottom: "10px" }}>
                <Doughnut
                    data={data}
                    options={{
                        title: {
                            display: true,
                            text: "Click Conversion - Today",
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
