import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'


import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import PageviewIcon from '@mui/icons-material/Pageview';
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';


const Login = ({Title}) => {
    let INITIAL_DATA = {
        email: "",
        password: "",
    }

    const URL = 'https://reqres.in/api/'+Title.toLowerCase()
    const [Login_Data, set_Login_Data] = useState(INITIAL_DATA)
    const [Token, set_Token] = useState()

    console.log("Login Token", Token);



    const navigate = useNavigate()
  



    const onChangeHandler = (e) => {
        debugger
        let name = e.target.name
        let value = e.target.value

        set_Login_Data((prev) => ({
            ...prev,
            [name]: value
        }))
    }



    const onSubmitHandler = () => {
        debugger

        fetch(URL, {
        // fetch('https://reqres.in/api/login', {
            method: 'POST',
            body: JSON.stringify(Login_Data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => set_Token(json.token));
            // .then((json) => console.log(json));


        if(Title === "Register") {
            navigate('/login')
        }    
    }

    const toRegister = () => {
        navigate("/register")
    }



    useEffect(() => {
        if(Title === "Login"){
            localStorage.setItem("SOWAN-TOKEN", Token)            
        }

        if(Token) {
            navigate('/')
        }
    },[Token])

    useEffect(() =>{
        localStorage.removeItem("SOWAN-TOKEN")
    }, [])

    

    


    return (
        <>
            <Stack sx={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                <Avatar sx={{ bgcolor: pink[500] }} variant="rounded" >                  

                    {Title === "Login" ? <LoginIcon /> : <AppRegistrationIcon/>}
                </Avatar>
                <Typography
                    sx={{ marginTop: "1rem" }}
                    variant="h5"
                    gutterBottom
                    component="div">
                    {Title}
                </Typography>
                <TextField
                    sx={{ marginTop: "1rem", width: "500px" }}
                    type="email"
                    required
                    id="login-email"
                    label="email"
                    helperText="Enter your e-mail"
                    name='email'
                    onChange={onChangeHandler}

                />
                <TextField
                    sx={{ width: "500px" }}
                    type="password"
                    required
                    id="login-password"
                    label="password"
                    helperText="Enter your password"
                    name='password'
                    onChange={onChangeHandler}

                />
                <Button
                    sx={{ marginTop: "1rem", width: "500px" }}
                    variant="contained"
                    size="large"
                    onClick={onSubmitHandler}
                >
                    {Title === "Login" ? "Login" : "Register"}
                </Button>

                {Title === "Login" ? <Button onClick={toRegister}>Don't Have Account? SIGN UP</Button> : null}

                
            </Stack>
        </>

    )
}

export default Login