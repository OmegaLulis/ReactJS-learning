import React, {useContext} from 'react';
import {Box, Grid, IconButton, InputBase, useTheme} from "@mui/material";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchIcon from "@mui/icons-material/Search";
import NotifactionsNoneIcon from "@mui/icons-material/NotificationsNone";
import {ColorModeContext, tokens} from "../../theme";
import {useStyles} from "./styles";

const TopBarComponent = () => {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    // используем useContext для цветовой палитры
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()

    return (
        <Box display='flex' justifyContent='space-between' alignItems='center' px='32px' py='24px'>
            <Grid>Welcom Jopa </Grid>
            <Box display='flex'>
                <Grid onClick={colorMode.toggleColorMode} >
                    <IconButton sx={{mr: '25px'}}>
                        {theme.palette.mode === 'dark' ? (<DarkModeIcon fontSize='large'/>) : (<LightModeIcon fontSize='large'/>)}
                    </IconButton>
                </Grid>
                <Grid sx={{ pr:'37px',borderRight:`1px solid ${colors.borderColor}`}}>
                    <IconButton>
                        <NotifactionsNoneIcon fontSize='large' />
                    </IconButton>
                </Grid>
                <Grid
                    sx={{
                        display: 'flex',
                        backgroundColor: `${colors.primary[600]}`,
                        borderRadius: '8px',
                        ml: '28px'
                    }}
                >
                    {/*Поле для поиска*/}
                    <IconButton className={classes.root} >
                        <SearchIcon/>
                    </IconButton>
                    {/*получение данных инпутбейс - типа текст*/}
                    <InputBase sx={{px: "18px", py: '12px'}} placeholder='search for me'/>
                </Grid>
            </Box>
        </Box>
    );
};

export default TopBarComponent;