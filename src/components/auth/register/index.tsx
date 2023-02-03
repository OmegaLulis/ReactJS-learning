import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";
import {jsx} from "@emotion/react";
import JSX = jsx.JSX;

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    // пропрсы из рутового компонента
    const {navigate, register, errors} = props

    return (
        <>
            {/*Добавляем визуальную часть логина внутре фрагмента*/}
            <Typography variant="h2" fontFamily="Poppins" textAlign="center"> Register </Typography>
            <Typography variant="body1" marginBottom={2} fontFamily="Poppins" textAlign="center"> Fill in the fields for
                registration </Typography>
            <TextField
                error={!!errors.firstName}
                fullWidth={true}
                margin="normal"
                label="Name"
                variant="outlined"
                placeholder="Name"
                helperText={errors.firstName ? `${errors.firstName.message}`: ''}
                {...register('firstName')}
            />
            <TextField
                error={!!errors.userName}
                fullWidth={true}
                margin="normal"
                label="Username" variant="outlined"
                placeholder="Username"
                helperText={errors.userName ? `${errors.userName.message}`: ''}
                {...register('userName')}
            />
            <TextField
                fullWidth={true}
                error={!!errors.email}
                margin="normal"
                label="Email"
                variant="outlined"
                placeholder="Email Address"
                helperText={errors.email ? `${errors.email.message}`: ''}
                {...register('email')}
            />
            <TextField
                type="password"
                error={!!errors.password}
                fullWidth={true}
                margin="normal"
                label="Password"
                variant="outlined"
                placeholder="Password"
                helperText={errors.password ? `${errors.password.message}`: ''}
                {...register('password')}
            />
            <TextField
                type="password"
                error={!!errors.confirmPassword}
                fullWidth={true}
                margin="normal"
                label="Confirm Password"
                variant="outlined"
                placeholder="Confirm password"
                helperText={errors.confirmPassword ? `${errors.confirmPassword.message}`: ''}
                {...register('confirmPassword')}
            />
            <Button type="submit" sx={{fontFamily: "Poppins", marginTop: 2, marginBottom: 2, width: "60%"}}
                    variant="contained"> Register </Button>
            <Typography variant="body1" sx={{fontFamily: "Poppins",}}> Already have an account?<span
                className="incitingText" onClick={() => navigate('/login')}>Sign in!</span></Typography>
            <Typography variant="body1" sx={{fontFamily: "Poppins",}}><span
                className="incitingText">Forgot Password?</span></Typography>
        </>
    );
};

export default RegisterPage;