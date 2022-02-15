import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { headstyle } from '../../../makeStyles/Homehead';
import { CardMedia } from '@mui/material';
const HomeHad = () => {
  const classes = headstyle();

  return (
    <Box>
      <AppBar position="static">
        <Box className={classes.root}>
          <Box
            sx={{ border: '1px solid black', width: '33.3%', height: '80px' }}
          >
            <Box className={classes.headLeft} component="div">
              <Typography
                className={classes.headLeftInner}
                variant="h6"
                component="div"
              >
                김반장
              </Typography>
              <Typography
                className={classes.headLeftInner}
                variant="h6"
                component="div"
              >
                업무요청
              </Typography>
              <Typography
                className={classes.headLeftInner}
                variant="h6"
                component="div"
              >
                게시판
              </Typography>
            </Box>
            <Box></Box>
            <Box></Box>
          </Box>
          <Box
            sx={{
              border: '1px solid black',
              width: '33.3%',
              height: '80px',
            }}
          >
            <Box
              sx={{
                height: '80px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CardMedia
                className={classes.media}
                component="img"
                image="/new_Logo.webp"
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'right',

              border: '1px solid black',
              width: '33.3%',
              height: '80px',
            }}
          >
            <Box>
              <Button sx={{ height: '80px', width: '130px' }} color="inherit">
                유저이름
              </Button>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default HomeHad;
