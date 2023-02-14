import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { IAreaChartProps, ILineChartProps } from "../../../common/types/assets";
import moment from "moment/moment";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const LineChart = (props: ILineChartProps) => {
    const data = props.price_chart_data;
    console.log(data);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            title: {
                display: true,
                text: "Price dynamics for 3 mouth",
            },
        },
    };

    const labels = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
    ];

    const dynamicRatePrice: any = (data: any) => {
        let b: any[] = [];
        const a = [];
        let time = [];

        for (let i = 0; i < data.length; i++) {
            a.push(data[i].name.toUpperCase());
            for (let j = 1; j < data[i].price_chart_data.length; j++) {
                b.push(
                    Number(data[i].price_chart_data[j][1]) /
                        Number(data[i].price_chart_data[0][1]),
                    // текущая цена делится на прошлую получается темп роста за день
                );
                time.push([data[i].price_chart_data[j][0]]);
            }
            a.push(b, time);
            b = [];
            time = [];
        }
        return a;
    };
    console.log(dynamicRatePrice(data));
    console.log(data);
    const values = {
        labels: dynamicRatePrice(data)[2].map((element: any) =>
            moment(element[0]).format("DD.MM.YY"),
        ),
        datasets: [
            {
                label: dynamicRatePrice(data)[0],
                data: dynamicRatePrice(data)[1],
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
                label: dynamicRatePrice(data)[3],
                data: dynamicRatePrice(data)[4],
                borderColor: "rgb(132, 99, 255)",
                backgroundColor: "rgba(132, 99, 255, 0.5)",
            },
        ],
    };

    return <Line options={options} data={values} />;
};
export default LineChart;
