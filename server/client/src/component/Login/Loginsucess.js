import { Dialog } from '@material-ui/core'
import Alert from '@mui/material/Alert';
import React from 'react'

const Loginsucess = (onsucess, setonsucess) => {
    const handleclose = () => {
        setonsucess(false);
    
    }
    return (
        <>
            <Dialog onsucess={onsucess} onClose={handleclose}>
                <Alert variant="outlined" severity="success">
                    This is a success alert — check it out!
                </Alert>
            </Dialog>
        </>
    )
}

export default Loginsucess