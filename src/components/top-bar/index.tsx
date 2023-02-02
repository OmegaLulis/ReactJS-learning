import React, {useContext} from 'react';
import {Box, Grid, IconButton, InputBase, useTheme} from "@mui/material";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import NotifactionsNoneIcon from "@mui/icons-material/NotificationsNone";
import {ColorModeContext, tokens} from "../../theme";
import {useStyles} from "./styles";
import {useAppSelector} from "../../utils/hook";

const TopBarComponent = () => {

    const theme = useTheme()
    // используем useContext для цветовой палитры
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Grid>Welcom U </Grid>
            <Box display='flex'>
                <Grid onClick={colorMode.toggleColorMode} className={classes.themeIcon}>
                    <IconButton>
                        {theme.palette.mode === 'dark' ? (<DarkModeIcon fontSize='large'/>) : (<LightModeIcon fontSize='large'/>)}
                    </IconButton>
                </Grid>
                <Grid className={classes.notificationIcon}>
                    <IconButton>
                        <NotifactionsNoneIcon fontSize='large' />
                    </IconButton>
                </Grid>
                <Grid
                    className={classes.searchBlock}
                >
                    {/*Поле для поиска*/}
                    <IconButton className={classes.searchIcon} >
                        <SearchIcon/>
                    </IconButton>
                    {/*получение данных инпутбейс - типа текст*/}
                    <InputBase className={classes.searchInput} placeholder='search for me'/>
                </Grid>
            </Box>
        </Box>
    );
};

export default TopBarComponent;