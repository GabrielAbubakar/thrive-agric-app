import React from 'react'
import { Link } from "react-router-dom";
import { Button } from '@mui/material';


const App = () => {
    return (
        <div>

            <Link to="/DetailScreen">
                <Button variant='contained'>
                    DetailScreen
                </Button>
            </Link>
        </div>
    )
}

export default App;