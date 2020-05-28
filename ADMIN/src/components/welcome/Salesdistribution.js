import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
        {
            label: "Sales Distribution - This Week",
            backgroundColor: [
                "#66bb6a",
                "#26c6da",
                "#649717",
                "#173497",
                "#977017",
                "#97172e",
                "#179757",
            ],
            hoverBackgroundColor: [
                "#66bb6a",
                "#26c6da",
                "#649717",
                "#173497",
                "#977017",
                "#97172e",
                "#179757",
            ],
            data: [42, 72, 52, 86, 61, 84, 75],
        },
    ],
};

class Salesdistribution extends React.Component {
    render() {
        return (
            <div className="container-pie" style={{ paddingBottom: "10px" }}>
                <Doughnut
                    data={data}
                    options={{
                        title: {
                            display: true,
                            text: "Sales Distribution - This Week",
                            fontSize: 15,
                        },
                        legend: {
                            display: false,
                            position: "right",
                        },
                    }}
                />
            </div>
        );
    }
}

export default Salesdistribution;
