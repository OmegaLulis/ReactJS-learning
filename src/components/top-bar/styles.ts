import {makeStyles} from "@mui/styles";
import {Theme} from "@mui/material";
import {tokens} from "../../theme";


export const useStyles = makeStyles((theme:Theme)=>{
    const colors = tokens(theme.palette.mode)
    return {
        root: {
            display:'flex',
            justifyContent:'space-between',
            alignItems:'center',
            padding:'32px 24px',
            backgroundColor: colors.primary.DEFAULT,
            maxHeight: '95px',
            borderBottom: `1px solid ${colors.borderColor}`,
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
