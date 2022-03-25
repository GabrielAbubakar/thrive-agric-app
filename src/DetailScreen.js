import React, { useContext } from 'react'
import UserContext from './context/UserContext'

const DetailScreen = () => {

    const { value, setValue } = useContext(UserContext)

    return (
        <div>
            {/* {value} */}
            DetailsScreen feeds {value}
        </div>
    )
}

export default DetailScreen