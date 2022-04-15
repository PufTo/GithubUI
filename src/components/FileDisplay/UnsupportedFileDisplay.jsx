import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

export default function UnsupportedFileDisplay(props) {
  const { fileName } = props;
  return (
    <Container>
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: '100vh' }}
      >
        <Typography
          sx={{
            fontWeight: 'bold',
            fontSize: '25px',
            mb: 3,
          }}
        >
          {fileName}
        </Typography>
        <Paper elevation={6} sx={{ width: 900, height: 600 }}>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            width='300'
            height='400'
            marginTop='15%'
          >
            <Box display='block'>
              <Image src='/alert.gif' alt='Warning' width={300} height={200} />
              <Typography sx={{ fontSize: '30px', ml: 5 }} color='error'>
                An error occured
              </Typography>
              <Typography sx={{ ml: 6.5, fontWeight: 'bold' }}>
                Unsupported File Display
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Container>
  );
}
