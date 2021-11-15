import React from 'react';
import Chart from "react-apexcharts";

export const Reports: React.FC = () => {

    const random = (min = 0, max = 100) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const state = {
        options: {
            chart: {
                id: "basic-bar",
                toolbar: {
                    tools: {
                        download: false
                    }
                }
            },
            xaxis: {
                categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
        },
        series: [
            {
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }
        ]
    };

    return (
        <>
            <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="500"
            />
        </>
    );
};
