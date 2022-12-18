import React from 'react'
import './Profile.css'

export default function Profile() {
    return (
        <div className='profile-container'>
            <h1>
            About Me
            </h1>
            <div className="profile-parent">
                <div className="profile-picture">
                    <div className="profile-picture-background"></div>
                </div>  
                <div className="profile-details">
                I'm Peter Pileta, a front-end developer experienced with React, Redux, Bootstrap and Node.js. Passionate in designing fast, efficient, and well-structured web applications using the latest frameworks/libraries.
                </div> 
            </div>
        </div>
    )
}