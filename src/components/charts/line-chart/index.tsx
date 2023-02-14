import React from "react";
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ILineChartProps } from "../../../common/types/assets";
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
                text: "Dynamics of price changes for 3 months",
            },
        },
    };

    const dataSetsForGraph = (data: any) => {
        //Палитра цветов для координат линейных функций
        const colorsBorderAndBackGround = (i: number) => {
            switch (i) {
                case 0:
                    return ["rgb(255, 99, 132)", "rgba(255, 99, 132, 0.5)"];
                case 1:
                    return ["rgb(132, 99, 255)", "rgba(132, 99, 255, 0.5)"];
                case 2:
                    return ["rgb(120,255,99)", "rgba(120, 255, 99, 0.5)"];
                default:
                    const randomBetween = (min: any, max: any) =>
                        min + Math.floor(Math.random() * (max - min + 1));
                    const r = randomBetween(0, 255);
                    const g = randomBetween(0, 255);
                    const b = randomBetween(0, 255);
                    const rgb = `rgb(${r},${g},${b})`;
                    const rgba = `rgba(${r}, ${g}, ${b}, 0.5)`;
                    return [rgb, rgba];
            }
        };

        // Инициализируем массив для координат линейных функций
        const mainDatasets = [];
        for (let i = 0; i < data.length; i++) {
            const dataAlready: any[] = [];
            for (let j = 1; j < data[i].price_chart_data.length; j++) {
                dataAlready.push(
                    Number(data[i].price_chart_data[j][1]) /
                        Number(data[i].price_chart_data[0][1]),
                    // текущая цена делится на базисную получается темп роста за период
                );
            }
            // создаем объекты необходимы для отрисовки графиков согласно документации line react-chartjs-2
            const objectDatasets = {
                label: data[i].name.toUpperCase(),
                data: dataAlready,
                borderColor: colorsBorderAndBackGround(i)[0],
                backgroundColor: colorsBorderAndBackGround(i)[1],
            };
            mainDatasets.push(objectDatasets);
        }
        // передаем период для наших графиков(кординаты по X)
        const periodGraphs = data[0].price_chart_data.map((element: any) =>
            moment(element[0]).format("DD.MM.YY"),
        );
        // объект который передается для отрисовки в переменую values, которая далее пробрассывается в компонента Line
        return {
            labels: periodGraphs,
            datasets: mainDatasets,
        };
    };
    const values = dataSetsForGraph(data);

    return <Line options={options} data={values} />;
};
export default LineChart;
