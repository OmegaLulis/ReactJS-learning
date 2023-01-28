import {AppDispatch, RootState} from "../../store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
// хуки авторизации
export const  useAppDispatch: ()=> AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAuth = ()=> {
    const {isLogged} = useAppSelector((state)=>state.auth)
    return isLogged
}
