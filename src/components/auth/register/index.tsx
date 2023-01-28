import React from 'react';
import {Button, TextField, Typography} from "@mui/material";
import {IPropsRegister} from "../../../common/types/auth";
import {jsx} from "@emotion/react";
import JSX = jsx.JSX;

const RegisterPage:React.FC<IPropsRegister> = (props:IPropsRegister):JSX.Element => {
    // пропрсы из рутового компонента
    const {setEmail, setPassword, setUserName,setConfirmPassword,setFirstName, navigate} = props

    return (
        <>
            {/*Добавляем визуальную часть логина внутре фрагмента*/}
            <Typography variant="h2" fontFamily="Poppins" textAlign="center">  Register </Typography>
            <Typography variant="body1" marginBottom={2} fontFamily="Poppins" textAlign="center">  Fill in the fields for registration </Typography>
            <TextField fullWidth={true} margin="normal" label="Name" variant="outlined" placeholder="Name" onChange={(e)=>setFirstName(e.target.value)}/>
            <TextField fullWidth={true} margin="normal" label="Username" variant="outlined" placeholder="Username" onChange={(e)=>setUserName(e.target.value)} />
            <TextField fullWidth={true} margin="normal" label="Email" variant="outlined" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)} />
            <TextField type="password" fullWidth={true} margin="normal" label="Password" variant="outlined" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
            <TextField type="password" fullWidth={true} margin="normal" label="Confirm Password" variant="outlined" placeholder="Confirm password" onChange={(e)=>setConfirmPassword(e.target.value)}/>
            <Button type="submit" sx={{fontFamily:"Poppins", marginTop: 2, marginBottom:2, width: "60%"}} variant="contained"> Register </Button>
            <Typography variant="body1" sx={{fontFamily:"Poppins",}}> Already have an account?<span className="incitingText" onClick={()=>navigate('/login')}>Sign in!</span></Typography>
            <Typography variant="body1" sx={{fontFamily:"Poppins",}}><span className="incitingText">Forgot Password?</span></Typography>
        </>
    );
};

export default RegisterPage;