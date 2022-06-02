import { KeyboardReturnSharp } from '@material-ui/icons'
import React from 'react'

const ProfileComponent = (props) => {
    return (
        <div>
        <h1> Yay, our Profile dumb component</h1>
        <h1>{props.cars.map((car,index) => {
            return(
                <h2 key={index}>{car}</h2>
            )
        })}</h1>
        </div>
    )
}

export default ProfileComponent