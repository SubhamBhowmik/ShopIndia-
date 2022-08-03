import { Drawer } from '@mui/material'
import React from 'react'

const Login = ({ open, setopen }) => {
    const handleclose =() => {
        setopen(false)
    }
        
         return (
            <>
                <Drawer open={open} onClose={handleclose}>
                    hiiii
                </Drawer>

            </>
        )
}

export default Login