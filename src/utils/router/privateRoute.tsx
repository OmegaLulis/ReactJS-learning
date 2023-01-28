/*
authorization verification
 */
import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../hook";

const PrivateRoute = () => {
    //имитация токена true
    const auth = useAuth()
    return (
        auth ? <Outlet /> : <Navigate to={"register"} />
    );
};

export default PrivateRoute;