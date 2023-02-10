import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    ScriptableContext,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
import { IAreaChartProps } from "../../../common/types/assets";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
);

export const options = {
    responsive: true,
    scales: {
        y: {
            display: false,
            grid: { display: false },
        },
        x: {
            display: false,
            grid: { display: false },
        },
    },
    plugins: {
        legend: {
            display: false,
            position: "top" as const,
        },
        title: {
            display: false,
            text: "Chart.js Line Chart",
        },
    },
};

const AreaChart = (props: IAreaChartProps) => {
    const { data } = props;
    const values = {
        labels: data.map((element: number[]): string =>
            moment(element[0]).format("DD.MM.YY"),
        ),
        datasets: [
            {
                label: "Price",
                data: data.map((element: number[]): number => {
                    return element[1] as number;
                }),
                fill: "start",
                borderColor: "#8eb826",
                backgroundColor: (context: ScriptableContext<"line">) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 180);
                    gradient.addColorStop(0, "#C1EF00");
                    gradient.addColorStop(1, "#232323");
                    return gradient;
                },
            },
        ],
    };
    return <Line options={options} data={values} />;
};

export default AreaChart;
