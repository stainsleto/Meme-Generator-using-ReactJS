import React from 'react';
import '../App.css'
import MemeLogo from '../images/meme-logo.png'

export default function Header(){
    return(
    <div className="header-main">
        <div className="header-left">
            <img id="header-logo" src={MemeLogo} />
            <h3>Meme Generator</h3>
        </div>

        <div className="header-right">
            <h4>React Course - Project 3</h4>
        </div>

    </div>

    )
}
