import React from "react";
import { useRouter } from "next/router";
<<<<<<< HEAD
import Highlighter from 'react-highlight-words';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Typography from '@mui/material/Typography';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CircleIcon from '@mui/icons-material/Circle';
=======
import Highlighter from "react-highlight-words";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import Typography from "@mui/material/Typography";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CircleIcon from "@mui/icons-material/Circle";
import githubColors from '../../styles/githubColors.json';

RepoItem.defaultProps = {
  filterQuery: "",
};
>>>>>>> main

export default function RepoItem(props) {
  const { filterQuery, repo } = props;
  const { name, open_issues, watchers, language, visibility } = repo;
  const router = useRouter();

  const handleShowRepoDetails = () => {
    router.push(`${router.asPath}/${name}`);
  };

<<<<<<< HEAD
  const capitalizeFirstLetter = string => {
    return string.visibility[0].toUpperCase() + string.visibility.slice(1);
  };

  return (
    <div>
=======
  const capitalizeFirstLetter = (string) => {
    return string.visibility[0].toUpperCase() + string.visibility.slice(1);
  };

  const libraryColors = githubColors;

  return (
    <>
>>>>>>> main
      <Card
        onClick={handleShowRepoDetails}
        sx={{
          width: 380,
          height: 180,
          padding: 2,
          mb: 0,
<<<<<<< HEAD
          '&:hover': {
            backgroundColor: '#eeeeee',
            cursor: 'pointer',
          },
          '& .MuiCard-root.same-height': {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
        }}
      >
        <Box sx={{ mb: 0 }}>
          <Typography variant='h6' style={{ fontWeight: 600 }}>
            <Highlighter
              highlightClassName='YourHighlightClass'
              searchWords={[filterQuery]}
              autoEscape={true}
              textToHighlight={repo.name}
            />
          </Typography>
          <Typography sx={{ mt: 1.5 }} color='text.secondary'>
            <CircleIcon sx={{ fontSize: 13 }} />
            {language}
          </Typography>
          <Typography color='text.secondary'>
            <RadioButtonCheckedIcon sx={{ fontSize: 10 }} />
=======
          "&:hover": {
            backgroundColor: "#eeeeee",
            cursor: "pointer",
          },
          "& .MuiCard-root.same-height": {
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
      >
        <Typography variant='h6' style={{ fontWeight: 600 }}>
          <Highlighter
            highlightClassName='YourHighlightClass'
            searchWords={[filterQuery]}
            autoEscape={true}
            textToHighlight={repo.name}
          />
        </Typography>
        <Box sx={{ mb: 0 }}>
          <Typography sx={{ mt: 1.5, mb: 0.2 }} color='text.secondary'>
            <CircleIcon
              sx={{ fontSize: 12, color: `${libraryColors[language]}`, mr: 1 }}
            />
            {language}
          </Typography>
          <Typography color='text.secondary' sx={{ mb: 0.2 }}>
            <RadioButtonCheckedIcon sx={{ fontSize: 10, mr: 1 }} />
>>>>>>> main
            Issues:{open_issues}
          </Typography>

          {visibility === 'public' ? (
            <Typography color='text.secondary'>
<<<<<<< HEAD
              <LockOpenIcon sx={{ fontSize: 15 }} />
=======
              <LockOpenIcon sx={{ fontSize: 13, mr: 0.8, mb: 0.2 }} />
>>>>>>> main
              {capitalizeFirstLetter({ visibility })}
            </Typography>
          ) : (
            <Typography>
<<<<<<< HEAD
              <LockIcon sx={{ fontSize: 15 }} />
=======
              <LockIcon sx={{ fontSize: 13, mr: 0.8, mb: 0.2 }} />
>>>>>>> main
              {capitalizeFirstLetter({ visibility })}
            </Typography>
          )}
        </Box>

<<<<<<< HEAD
        <Box sx={{ display: 'flex', flexDirection: 'row-reverse', mb: 0 }}>
          <Typography
            position='inline'
            variant='body1'
            align='right'
            color='text.secondary'
          >
            {watchers}
            <RemoveRedEyeIcon sx={{ fontSize: 15 }} />
          </Typography>
        </Box>
      </Card>
    </div>
=======
        <Box sx={{ display: "flex", flexDirection: "row-reverse", mb: 0 }}>
          <Typography
            position="inline"
            variant="body1"
            align="right"
            color="text.secondary"
          >
            {watchers}
            <RemoveRedEyeIcon sx={{ fontSize: 15, ml: 1 }} />
          </Typography>
        </Box>
      </Card>
    </>
>>>>>>> main
  );
}
