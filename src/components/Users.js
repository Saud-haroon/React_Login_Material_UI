import React, { useEffect, useState } from 'react'
import './users.css'
import axios from 'axios'
import { fetchUser } from '../services/actions/actions'
import { useNavigate } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { Visibility } from '@mui/icons-material'

const Users = () => {

    const [Token, set_Token] = useState()

    console.log("Users Token", Token);

    const users = useSelector((state) => state.allUsers.users.data)
    const dispatch = useDispatch()
    const navigate = useNavigate()




    const fetchUsers = async () => {
        const response = await axios
            .get('https://reqres.in/api/users')
            .catch((err) => {
                console.log('Err', err);
            })
        // console.log(response.data.data);
        dispatch(fetchUser(response.data))
    }

    const onLogOut = () => {
        navigate("/login")
        localStorage.removeItem("SOWAN-TOKEN")
    }

    useEffect(() => {
        fetchUsers()
        set_Token(
            localStorage.getItem("SOWAN-TOKEN")
        )
    }, [])

    // useEffect(() => {
    //     debugger
    //     if (!Token) {
    //         navigate("/login")
    //     }
    // },[Token])
    return (
        <>
            <Container className='widgetSm'>
            <Button
            sx={{float: "right"}}
                variant="outlined"
                size="large"
                onClick={onLogOut}
            >
                LOGOUT
            </Button>
                <Typography className="widgetSmTitle" variant="h5" gutterBottom component="div">
                    New Join Members
                </Typography>
                <List className="widgetSmList">
                    {users?.map((item, index) => {
                        return (
                            <ListItem key={index} className="widgetSmItem">
                                <ListItemAvatar>
                                    <Avatar className='widgetSmAvatar' alt="Remy Sharp" src={item.avatar} />
                                </ListItemAvatar>
                                <Container className="widgetSmUser">
                                    <Typography className="widgetSmUsername" variant="h6" gutterBottom component="div">
                                        {item.first_name} {item.last_name}
                                    </Typography>
                                    <Typography className="widgetSmRole" variant="subtitle2" gutterBottom component="div">
                                        {item.email}
                                    </Typography>
                                </Container>
                                <Button className="widgetSmBtn" variant="outlined" startIcon={<Visibility className='widgetSmIcon' />}>
                                    Display
                                </Button>
                            </ListItem>
                        )
                    }
                    )}
                </List>
            </Container>
        </>
    )
}

export default Users