import { createAsyncThunk } from "@reduxjs/toolkit";
import { coinGeckoApi } from "../../../utils/axios";

// используем AsynkThunk для запроса к Coingecko
// use AsyncThunk to response(get) whit utils axios

export const getFavoriteAssets = createAsyncThunk(
    "coins/markets",
    async (data: any, { rejectWithValue }) => {
        try {
            const assets = await coinGeckoApi.get(
                `coins/${data}/market_chart?vs_currency=usd&days=90`,
            );
            return { name: data, data: assets.data };
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    },
);
