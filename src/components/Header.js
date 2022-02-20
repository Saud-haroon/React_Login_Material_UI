import React, { useEffect, useState } from 'react'

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';


const Header = () => {
    const [Token, set_Token] = useState()

    console.log('Header Token', Token);

    


    

    useEffect(() => {
        set_Token(
            localStorage.getItem("SOWAN-TOKEN")          
        )
      },[])
  
    return (
        <>
            <React.Fragment>
                <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>

                    <Typography
                        component="h2"
                        variant="h5"
                        color="inherit"
                        align="center"
                        noWrap
                        sx={{ flex: 1 }}
                    >
                        SOWAAN APP
                    </Typography>            
                   
                   
                </Toolbar>
                <Toolbar
                    component="nav"
                    variant="dense"
                    sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
                >

                </Toolbar>
            </React.Fragment>
        </>
    )
}

export default Header