// Имитация данных с бэкенда для нашего сайдбара
import {HomeOutlined,
    AutoGraphOutlined,
    MenuBookOutlined,
    SettingsOutlined,
} from "@mui/icons-material";

// Наше меню
export const navMenu = [
    {
        name: "Home",
        icon: <HomeOutlined />,
        path: '/',
        id: 1,
    },
    {
        name: "Watch list",
        icon: <AutoGraphOutlined />,
        path: '/watchlist',
        id: 2,
    },
    {
        name: "News",
        icon: <MenuBookOutlined />,
        path: '/news',
        id: 3,
    },
    {
        name: "Settings",
        icon: <SettingsOutlined />,
        path: '/settings',
        id: 4,
    },
]