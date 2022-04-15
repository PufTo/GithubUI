import React from "react";
import Image from 'next/image'
<<<<<<< HEAD

const imgForm = (rawImageDataBase64) => {
  return "data:image/png;base64," + rawImageDataBase64;
=======
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const imgForm = rawImageDataBase64 => {
  return 'data:image/png;base64,' + rawImageDataBase64;
>>>>>>> main
};

export default function ImageDisplay(props) {
  const { content } = props;
<<<<<<< HEAD
  return <Image src={imgForm(content)} alt="Image" />;
=======
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
            marginTop='15%'
            width='300'
            height='400'
          >
            <img width='400' height='300' src={imgForm(content)} alt='Image' />;
          </Box>
        </Paper>
      </Grid>
    </Container>
  );
>>>>>>> main
}
