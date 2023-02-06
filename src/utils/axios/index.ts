import axios from "axios";

export const instance = axios.create({

    baseURL: 'http://localhost:5000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

// DataCrypto 0.1 Request for Coingecko
///Создаем axios для запроса к удаленному серверу
// Create axios instance for request to remote host
export const coinGeckoApi = axios.create({

    baseURL: 'https://api.coingecko.com/api/v3',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});