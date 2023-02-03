import React, {Fragment} from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsLogin} from "../../../common/types/auth";
import {jsx} from "@emotion/react";
import JSX = jsx.JSX;

// Страница логина
const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {navigate, register, errors} = props // по свойству onChange поля передаем наши  пропсы полю
    return (
        <>
            {/*Добавляем визуальную часть логина*/}
            <Typography variant="h2" fontFamily="Poppins" textAlign="center"> Login </Typography>
            <Typography variant="body1" marginBottom={2} fontFamily="Poppins" textAlign="center"> Enter login and
                password </Typography>
            <TextField
                error={!!errors.email}
                fullWidth={true}
                margin="normal"
                label="Email"
                variant="outlined"
                placeholder="Enter email"
                helperText={errors.email ? `${errors.email.message} ` : ''}
                {...register('email')}
            />
            <TextField type="password"
                       error={!!errors.password}
                       fullWidth={true}
                       margin="normal"
                       label="Password"
                       variant="outlined"
                       placeholder="Enter pass"
                       helperText={errors.password ? `${errors.password.message} ` : ''}
                       {...register('password')}
            />
            <Button type="submit" sx={{fontFamily: "Poppins", marginTop: 2, marginBottom: 2, width: "60%"}}
                    variant="contained"> Login </Button>
            <Typography variant="body1" sx={{fontFamily: "Poppins",}}> Not yet registered? Click<span
                className="incitingText" onClick={() => (navigate('/register'))}>Here!</span></Typography>
        </>
    );
};

export default LoginPage;