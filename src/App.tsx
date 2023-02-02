import React from 'react';
import Home from "./components/home";
// Импортирую Routes 0.3
import {Route, Routes} from "react-router-dom";
import PrivateRoute from "./utils/router/privateRoute";
import AuthRootComponent from "./components/auth";
import {ColorModeContext, useMode} from "./theme"
import {ThemeProvider, CssBaseline} from "@mui/material";
import LayoutComponent from "./components/layout";
import Watchlist from "./components/watchlist";
import Settings from "./components/settings";
import News from "./components/news";
import SettingsComponent from "./components/settings";
import WatchlistComponent from "./components/watchlist";
import NewsComponent from "./components/news";

function App() {
    const [colorMode, theme] = useMode()
    return (
        // передаем тему
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <LayoutComponent>
                    <div className="app">

                        {/*В Routes оборачиваем все пути, которые будут созданы с помошью компонента Route 0.4*/}
                        <Routes>
                            {/*PrivateRoute содержит routes которым необходим ограниченный доступ*/}
                            <Route element={<PrivateRoute/>}>
                                <Route path="/" element={<Home />}/>
                                <Route path="watchlist" element={<WatchlistComponent />}/>
                                <Route path="news" element={<NewsComponent />}/>
                                <Route path="settings" element={<SettingsComponent />}/>
                            </Route>
                            <Route path="register" element={<AuthRootComponent/>}/>
                            <Route path="login" element={<AuthRootComponent/>}/>
                        </Routes>
                    </div>
                </LayoutComponent>
            </ThemeProvider>

        </ColorModeContext.Provider>
    );
}

export default App;
