import React from 'react';
import cabecera from '../imagenes/landing-page-girl.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Circle from './Circle.js'

export default function Header() {
    return (
        <header className="Header" id="Header">
            <img src={cabecera} alt='cabecera' id='cabecera'/>
            <div className='cabecera-texto'>
                <h1>Feel the music</h1>
                <p>Stream over 20 thousand songs with one click</p>
                <Stack spacing={2} direction="row">
                    <Button variant="contained"><a href='#Join'>Join now</a></Button>
                </Stack>
            </div>
            
        </header>
    );
}