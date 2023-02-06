import {createAsyncThunk} from "@reduxjs/toolkit";
import {coinGeckoApi} from "../../../utils/axios";

// используем AsynkThunk для запроса к Coingecko
// use AsyncThunk to response(get) whit utils axios

export const getFavoriteAssets = createAsyncThunk(
    'coins/markets',
    async (data: any, {rejectWithValue}) => {
        try {
            const assets = await coinGeckoApi.get(`/coins/markets?vs_currency=usd&ids=${data}`)
            return {name: data,data: assets.data, price: assets.data[0].current_price}
        } catch (error: any) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
