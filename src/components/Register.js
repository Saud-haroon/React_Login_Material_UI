import React, { useEffect, useState } from 'react'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { green, pink } from '@mui/material/colors';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';

const Register = () => {
    let INITIAL_DATA = {
        email: "",
        password: "",
    }
    const [Login_Data, set_Login_Data] = useState(INITIAL_DATA)

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

        fetch('https://reqres.in/api/register', {
            method: 'POST',
            body: JSON.stringify(Login_Data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }
  return (
    <>
            <Stack sx={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                <Avatar sx={{ bgcolor: pink[500] }} variant="rounded" >
                    <PageviewIcon />
                </Avatar>
                <Typography
                    sx={{ marginTop: "1rem" }}
                    variant="h5"
                    gutterBottom
                    component="div">
                    REGISTER
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
                    Register
                </Button>
            </Stack>
        </>
  )
}

export default Register