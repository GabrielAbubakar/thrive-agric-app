import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Button, TextField } from '@mui/material';
import UserContext from './context/UserContext';


const Homescreen = () => {

    const { value, setValue } = useContext(UserContext)

    return (
        <div>

            <Link to="/Detailscreen">
                <Button variant='contained'>
                    DetailScreen
                </Button>
            </Link> <br />
            <TextField id="filled-basic" label="Input Value" variant="filled" onChange={e => setValue(e.target.value)} />
            <p>
                {value}
            </p>


        </div>
    )
}

export default Homescreen