import React from 'react';
import MemeLogo from '../images/meme-logo.png'

export default function Header() {
    return (
        <header className="header">
            <img 
                src={MemeLogo} 
                className="header--image"
                alt="meme-logo"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Stains</h4>
        </header>
    )
}