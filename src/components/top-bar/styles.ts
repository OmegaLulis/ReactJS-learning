import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {tokens} from "../../theme";


export const useStyles = makeStyles((theme:Theme)=>{
    const colors = tokens(theme.palette.mode)
    return {
        root: {
            background: `${colors.primary.DEFAULT} !important`,
            borderBottom: `1px solid ${colors.borderColor}`,
            boxShadow: 'none !important'
        },
        toolBar : {
            justifyContent:'space-between',
            paddingRight: "45px",
            paddingLeft: "45px",
            paddingTop: "25px",
            paddingBottom: "25px"
        },
        menuIcon: {
            marginRight: '20px',
            cursor: 'pointer',
        },
        searchIcon : {
            '&:hover':{
                'backgroundColor' : 'transparent'
            }
        },
        themeIcon:{
            marginRight: '20px'
        },
        searchBlock:{
            display: 'flex',
            maxHeight: '45px',
            backgroundColor: `${colors.primary[600]}`,
            borderRadius: '8px',
            marginLeft: '28px'
        },
        searchInput: {
            paddingRight: "18px",
            paddingLeft: "18px",
            paddingTop: "12px",
            paddingBottom: "12px"
        },
        notificationIcon:{
            paddingRight:'30px',
            borderRight:`1px solid ${colors.borderColor}`
        }
    }
})
