import React from 'react';
import microphone from '../imagenes/microphone.svg';
import albums from '../imagenes/albums.svg';
import more from '../imagenes/more.svg';
import covers from '../imagenes/covers.jpg';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
export default function Discover() {
    return (
    <section className="discover" id="Discover">
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={1} sm={1} md={1}></Grid>
                <Grid item xs={10} sm={10} md={5}>
                    <div className='caja-general'>
                        <h1>Discover new music</h1>
                        <div className='caja-iconos'>
                            <button className='caja'>
                                <img src={microphone} alt='charts' id='charts'/>
                                <p>Charts</p>
                            </button>
                            <button className='caja'>
                                <img src={albums} alt='albums' id='albums'/>
                                <p>Albums</p>
                            </button>
                            <button className='caja'>
                                <img src={more} alt='more' id='more'/>
                                <p>More</p>
                            </button>
                        </div>
                        <p>By joining you can benefit by listening to the latest albums relased.</p>
                    </div>
                </Grid>
                <Grid item xs={10} sm={10} md={5} className='caja-discover'>
                    <img src={covers} alt='covers' id='covers'/>
                </Grid>
                <Grid item xs={1} sm={1} md={1}></Grid>
            </Grid>
        </Box>
    </section>
    );
}

