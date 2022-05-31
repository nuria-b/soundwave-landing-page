import React from 'react';
import Form from './Form.js'
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
  
export default function Join() {
    return (
    <section className="join" id="Join">
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid className='grid-join' item xs={1} sm={1} md={1}></Grid>
                <Grid className='grid-join' item xs={10} sm={10} md={5}>
                    <div>
                        <h2>Join the <span>fun.</span></h2>
                    </div>
                </Grid>
                <Grid className='grid-join' item xs={10} sm={10} md={5}>
                    <Form />
                </Grid>
                <Grid className='grid-join' item xs={1} sm={1} md={1}></Grid>
            </Grid>
        </Box>
    </section>
    );
}


