import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { headstyle } from '../../../makeStyles/Homehead';
import LogoutIcon from '@mui/icons-material/Logout';
import { CardMedia, Paper, Switch } from '@mui/material';
import { styled } from '@mui/system';
import clsx from 'clsx';
import { useSwitch, UseSwitchProps } from '@mui/base/SwitchUnstyled';
import MuiSwitch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';

const Switchs = withStyles({
  switchBase: {
    '&$disabled': {
      color: 'yellow',
    },
    '&$disabled + $track': {
      backgroundColor: 'green',
      opacity: 0.5,
    },
  },
  track: {},
  disabled: {},
})(MuiSwitch);

const HomeHad = () => {
  const classes = headstyle();
  const [state, setState] = useState({
    gilad: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

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
              <Paper
                sx={{
                  position: 'absolute',
                  top: '64px',
                  right: 10,
                  marginRight: 1.5,
                  borderRadius: '0px 0px 5px 5px',
                }}
              >
                <Typography
                  sx={{
                    p: 2,
                    borderBottom: '1px solid gray',
                  }}
                >
                  알림
                  <Switch
                    sx={{ marginLeft: '15px' }}
                    checked={state.gilad}
                    onChange={handleChange}
                    name="gilad"
                  />
                </Typography>

                <Typography sx={{ fontSize: '15px', p: 2 }}>
                  <Box sx={{ display: 'flex' }}>
                    <Box sx={{ marginRight: '10px' }}>로그아웃</Box>
                    <LogoutIcon />
                  </Box>
                </Typography>
              </Paper>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
};

export default HomeHad;
