import Head from "next/head";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useState } from "react";
import styles from '../styles/Home.module.css';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';

export default function Home() {
  const inputRef = useRef();
  const route = useRouter();

  const [user, setUser] = useState(false);

  console.log(route);

  const handleSearchRepo = () => {
    //add some kind of validation
    route.push(`/${inputRef.current.value}`);
  };

  const onKeyDownHandler = event => {
    if (event.key === 'Enter') {
      handleSearchRepo();
    }
  };

  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Grid
        container
        spacing={2}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: '100vh' }}
      >
        <Grid item>
          <Image
            src='/github.gif'
            alt='Git hub logo'
            width={330}
            height={310}
          />
          <Grid />
        </Grid>
        <Grid item>
          <TextField
            id='searchForUser'
            label='Search for GitHub user'
            variant='outlined'
            margin='normal'
            sx={{
              width: '400px',
              height: '50px',
              '& label.Mui-focused': {
                color: 'black',
              },
              '& .MuiInput-underline:after': {
                borderBottomColor: 'black',
              },
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: 'black',
                },
                '&:hover fieldset': {
                  borderColor: 'black',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'black',
                },
              },
            }}
            onKeyPress={onKeyDownHandler}
            inputRef={inputRef}
          />
        </Grid>
        <Grid item>
          <Button
            variant='contained'
            color='primary'
            size='medium'
            onClick={handleSearchRepo}
          >
            <GitHubIcon />
            Show Repositories
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
