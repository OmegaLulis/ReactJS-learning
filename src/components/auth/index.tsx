import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import {Box} from "@mui/material";
import {jsx} from "@emotion/react";
import JSX = jsx.JSX;
import {useAppDispatch, useAppSelector} from "../../utils/hook";
import {appErros} from "../../common/errors";
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {LoginSchema, RegisterSchema} from "../../utils/yup";
import {useStyles} from "./styles";
import {loginUser, registerUser} from "../../store/thunks/auth";
// Рутовый компонент для регистрации и логина

const AuthRootComponent:React.FC = ():JSX.Element => {

    // ловим хук и в зависимости от данных отправляем пользователя к компоненту
    const location = useLocation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const classes = useStyles()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({

        resolver: yupResolver((location.pathname==='/login'? LoginSchema : RegisterSchema))
    });
    const loading = useAppSelector((state)=>(state.auth.isLoading))
    const handelSubmitForm = async (data: any) => {
        if (location.pathname==="/login") {
            try {
                await dispatch(loginUser(data))
                navigate('/')
            }catch (e){
                return e
            }
        } else{
            if (data.password===data.confirmPassword){
                try {
                    const userData = {
                        firstName: data.firstName,
                        userName: data.userName,
                        email: data.email,
                        password: data.password
                    }
                    await dispatch(registerUser(data))
                    navigate('/')
                } catch (e){
                    console.log(e)
                    return e
                }
            }else{
                throw new Error(appErros.passwordDoNotConfirm)
            }
        }
    }
    return (
        <div className={classes.root}>
            <form className={classes.form} onSubmit={handleSubmit(handelSubmitForm)}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'-3px -2px 20px 1px #202020'}
                >
                    {/*тут прокидываем компоненты и также ловим хуки */}
                    {location.pathname === "/login" ?
                        <LoginPage navigate={navigate}
                                   register={register}
                                   errors={errors}
                                   loading={loading}
                        />
                        : location.pathname === "/register" ?
                        <RegisterPage
                                      navigate={navigate}
                                      register={register}
                                      errors={errors}
                                      loading={loading}
                        />: null}
                </Box>
            </form>
        </div>
    )
    // return (location.pathname === "/login" ? <LoginPage /> : location.pathname === "/register" ? <RegisterPage />: null);
};

export default AuthRootComponent;