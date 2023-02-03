import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import "./style.scss"
import {Box} from "@mui/material";
import {instance} from "../../utils/axios";
import {jsx} from "@emotion/react";
import JSX = jsx.JSX;
import {useAppDispatch} from "../../utils/hook";
import {login} from "../../store/slice/auth";
import {appErros} from "../../common/errors";
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import {LoginSchema, RegisterSchema} from "../../utils/yup";
// Рутовый компонент для регистрации и логина

const AuthRootComponent:React.FC = ():JSX.Element => {

    // ловим хук и в зависимости от данных отправляем пользователя к компоненту
    const location = useLocation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({

        resolver: yupResolver((location.pathname==='/login'? LoginSchema : RegisterSchema))
    });

    const handelSubmitForm = async (data: any) => {
        if (location.pathname==="/login") {
            try {
                const userData = {
                    email: data.email,
                    password: data.password
                }
                // через инстанст идем к бэку за данными

                const user = await instance.post("/auth/login", userData)
                await dispatch(login(user.data))
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
                    const newUser = await instance.post('auth/register', userData)
                    await dispatch(login(newUser.data))
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
        <div className="root">
            <form className="form" onSubmit={handleSubmit(handelSubmitForm)}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    boxShadow={'5px 5px 10px #ccc'}
                >
                    {/*тут прокидываем компоненты и также ловим хуки */}
                    {location.pathname === "/login" ?
                        <LoginPage navigate={navigate}
                                   register={register}
                                   errors={errors}
                        />
                        : location.pathname === "/register" ?
                        <RegisterPage
                                      navigate={navigate}
                                      register={register}
                                      errors={errors}
                        />: null}
                </Box>
            </form>
        </div>
    )
    // return (location.pathname === "/login" ? <LoginPage /> : location.pathname === "/register" ? <RegisterPage />: null);
};

export default AuthRootComponent;