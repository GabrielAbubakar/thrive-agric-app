import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import UserContext from './context/UserContext'

const DetailScreen = () => {

    const { value, setValue } = useContext(UserContext)

    return (
        <div>
            <Link to="/">
                <Button variant='contained'>
                    Home
                </Button>
            </Link> <br />
            {/* {value} */}
            DetailsScreen feeds {value}
        </div>
    )
}

export default DetailScreen