import React, { useContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from './context/UserContext';
import DetailScreen from "./DetailScreen"
import Homescreen from './Homescreen';



const App = () => {

    const [value, setValue] = useState()

    return (
        <BrowserRouter>

            <UserContext.Provider value={{ value, setValue }}>
                <Routes>
                    <Route path="/" element={<Homescreen />} />
                    <Route path="DetailScreen" element={<DetailScreen />} />
                </Routes>
            </UserContext.Provider>


        </BrowserRouter>
    )
}

export default App;