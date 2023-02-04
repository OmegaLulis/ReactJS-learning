import React, {useContext} from 'react';
import {AppBar, Box, Grid, IconButton, InputBase, Toolbar, Typography, useTheme} from "@mui/material";
import {LightMode,DarkMode,Search, MenuOutlined} from "@mui/icons-material";
import NotifactionsNoneIcon from "@mui/icons-material/NotificationsNone";
import {ColorModeContext} from "../../theme";
import {useStyles} from "./styles";
import FlexBetween from "../flex-between";
import {ITopBarProps} from "../../common/types/top-bar";

const TopBarComponent: React.FC<ITopBarProps> = (props: ITopBarProps):JSX.Element => {

    const theme = useTheme()
    // используем useContext для цветовой палитры
    const colorMode: any = useContext(ColorModeContext)
    const classes = useStyles()
    const {isOpen,setIsOpen} = props

    return (
        <AppBar className={classes.root} position='static'>
            <Toolbar className={classes.toolBar}>
                <FlexBetween>
                    <MenuOutlined className={classes.menuIcon} onClick={()=> setIsOpen(!isOpen)} />
                    <Typography variant="h3"> Welcome {sessionStorage.getItem('firstName')} </Typography>
                </FlexBetween>
                <Box display='flex'>
                    <Grid onClick={colorMode.toggleColorMode} className={classes.themeIcon}>
                        <IconButton>
                            {theme.palette.mode === 'dark' ? (<DarkMode fontSize='large'/>) : (
                                <LightMode fontSize='large'/>)}
                        </IconButton>
                    </Grid>
                    <Grid className={classes.notificationIcon}>
                        <IconButton>
                            <NotifactionsNoneIcon fontSize='large'/>
                        </IconButton>
                    </Grid>
                    <Grid
                        className={classes.searchBlock}>
                        {/*Поле для поиска*/}
                        <IconButton className={classes.searchIcon}>
                            <Search />
                        </IconButton>
                        {/*получение данных инпутбейс - типа текст*/}
                        <InputBase className={classes.searchInput} placeholder='search for me'/>
                    </Grid>
                </Box>
            </Toolbar>
        </AppBar>

    );
};



    // <Box className={classes.root}>
    //     <Grid>Welcom U </Grid>
    //     <Box display='flex'>
    //         <Grid onClick={colorMode.toggleColorMode} className={classes.themeIcon}>
    //             <IconButton>
    //                 {theme.palette.mode === 'dark' ? (<DarkModeIcon fontSize='large'/>) : (<LightModeIcon fontSize='large'/>)}
    //             </IconButton>
    //         </Grid>
    //         <Grid className={classes.notificationIcon}>
    //             <IconButton>
    //                 <NotifactionsNoneIcon fontSize='large' />
    //             </IconButton>
    //         </Grid>
    //         <Grid
    //             className={classes.searchBlock}
    //         >
    //             {/*Поле для поиска*/}
    //             <IconButton className={classes.searchIcon} >
    //                 <SearchIcon/>
    //             </IconButton>
    //             {/*получение данных инпутбейс - типа текст*/}
    //             <InputBase className={classes.searchInput} placeholder='search for me'/>
    //         </Grid>
    //     </Box>
    // </Box>


export default TopBarComponent;