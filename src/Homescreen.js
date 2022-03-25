import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
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
            <input type="text" onChange={e => setValue(e.target.value)} />
            <p>
                {value}
            </p>

        </div>
    )
}

export default Homescreen