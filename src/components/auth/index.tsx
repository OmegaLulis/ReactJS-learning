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

// Рутовый компонент для регистрации и логина

const AuthRootComponent:React.FC = ():JSX.Element => {
    // для сохранения данных с бэка создаем переменные
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    const [userName, setUserName]= useState('')
    const [firstName, setFirstName]= useState('')
    const [confirmPassword, setConfirmPassword]= useState('')
    // ловим хук и в зависимости от данных отправляем пользователя к компоненту
    const location = useLocation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

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
            if (confirmPassword===password){
                try {
                    const userData = {
                        firstName,
                        userName,
                        email,
                        password
                    }
                    const newUser = await instance.post('auth/register', userData)
                    await dispatch(login(newUser.data))
                    navigate('/')
                } catch (e){
                    console.log(e)
                    return e
                }
            }else{
                throw new Error(appErros.passworDoNotConfirm)
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
                        <RegisterPage setEmail={setEmail}
                                      setPassword={setPassword}
                                      setUserName={setUserName}
                                      setFirstName={setFirstName}
                                      setConfirmPassword={setConfirmPassword}
                                      navigate={navigate}
                        />: null}
                </Box>
            </form>
        </div>
    )
    // return (location.pathname === "/login" ? <LoginPage /> : location.pathname === "/register" ? <RegisterPage />: null);
};

export default AuthRootComponent;