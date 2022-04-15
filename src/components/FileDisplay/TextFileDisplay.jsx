import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import Box from '@mui/material/Box';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const decode64 = string => {
  return Buffer.from(string, 'base64');
};

export default function TextFileDisplay(props) {
  const [copied, setCopied] = useState(false);
  const { fileName, content } = props;

  console.log(fileName);

  return (
    <>
      <Container maxWidth='sm'>
        <Grid
          container
          alignItems='center'
          justifyContent='center'
          maxWidth='lg'
        >
          <Box
            item
            sx={{
              fontWeight: 'bold',
              mt: 3,
              mr: 2,
            }}
            fontSize='25px'
          >
            {fileName}
          </Box>
          <Box sx={{ justifyContent: 'flex-end', mt: 3 }}>
            <CopyToClipboard
              options={{ debug: props.debug, message: '' }}
              text={decode64(content)}
              onCopy={() => setCopied(true)}
            >
              <button title='Copy to clipboard'>
                <ContentCopyIcon />
              </button>
            </CopyToClipboard>
          </Box>
        </Grid>
      </Container>
      <textarea
        className='textArea'
        readOnly
        value={decode64(content)}
      ></textarea>
    </>
  );
}
