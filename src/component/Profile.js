import React, { Component } from 'react';

const style = {
    profile : {
        margin: '25px 100px 75px 100px'
    }
}

export default function Profile(props){

    return (
        <div style={style.profile}>
            <img src="images/circle-cropped.png" alt="Lucent Academy" width="100" height="100"/>
            <h4>{props.name}</h4>
            <h4>{props.rank}</h4> 
        </div>
    )
}