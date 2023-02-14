import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { getFavoriteAssets } from "../../store/thunks/assets";
import { Box, Grid } from "@mui/material";
import { useStyles } from "./styles";
import AreaChart from "../../components/charts/area-chart";
import TrendDown from "../../assets/images/chart/trend-down.svg";
import TrendUp from "../../assets/images/chart/trend-up.svg";
import LineChart from "../../components/charts/line-chart";

const Home: React.FC = (): JSX.Element => {
    const favoriteAssets: any[] = useAppSelector(
        (state) => state.assets.favoriteAssets,
    );
    const dispatch = useAppDispatch();
    const fetchDataRef = useRef(false);
    const classes = useStyles();
    const favoriteAssetName = useMemo(() => ["ethereum", "bitcoin"], []);
    // Создаем фильтер массива, чтобы исключить перерендер хомепейджа при переходах с других страниц
    const favoriteFilteredArray = favoriteAssets.filter(
        (value, index: number, self) =>
            index === self.findIndex((t) => t.name === value.name),
    );
    const fetchData = useCallback(
        (data: string[]) => {
            data.forEach((element: string) => {
                dispatch(getFavoriteAssets(element));
            });
        },
        [dispatch],
    );

    useEffect(() => {
        if (fetchDataRef.current) return;
        fetchDataRef.current = true;
        fetchData(favoriteAssetName);
    }, [favoriteAssetName, fetchData]);
    const renderFavoriteBlock = favoriteFilteredArray.map((element: any) => {
        const currentCap = element.singleAsset.map(
            (element: any) => element.market_cap,
        );
        const priceTrend = element.singleAsset.map(
            (element: any) => element.market_cap_change_percentage_24h,
        );
        const currentPrice =
            element.price_chart_data[element.price_chart_data.length - 1];
        return (
            <Grid item xs={12} sm={6} lg={6} key={element.name}>
                <Grid container className={classes.topCardItem}>
                    <Grid item xs={12} sm={6} lg={6}>
                        <h3 className={classes.assetName}>{element.name}</h3>
                        <div className={classes.itemDetails}>
                            <h3 className={classes.cardPrice}>
                                ${currentPrice[1].toFixed(2)}
                            </h3>
                            <Box
                                className={
                                    priceTrend[0] > 0
                                        ? `${classes.priceTrend} ${classes.trendUp}`
                                        : `${classes.priceTrend} ${classes.trendDown}`
                                }
                            >
                                {priceTrend[0] > 0 ? (
                                    <img src={TrendUp} alt="" />
                                ) : (
                                    <img src={TrendDown} alt="" />
                                )}
                                <span>{priceTrend[0].toFixed(2)}%</span>
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <AreaChart data={element.price_chart_data} />
                    </Grid>
                </Grid>
            </Grid>
        );
    });

    return (
        <Box className={classes.root}>
            <Grid container spacing={2} className={classes.areaChart}>
                {renderFavoriteBlock}
            </Grid>
            <Grid container className={classes.lineChartBlock}>
                <Grid item xs={12} sm={12} lg={12}>
                    {favoriteFilteredArray.length && (
                        <LineChart price_chart_data={favoriteFilteredArray} />
                    )}
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
