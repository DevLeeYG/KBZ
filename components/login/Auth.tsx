import { Box, Button, Container } from '@material-ui/core';
import React from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import TextField from '@mui/material/TextField';

const container = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
    backgroundColor: '#027FFE',
  },
  text: {
    color: 'white',
  },
}));

const Auth = () => {
  const classes = container();

  return (
    <Box
      sx={{
        border: '1px solid black',
        width: '300px',
        height: '250px',
        padding: '15px',
      }}
    >
      <TextField
        sx={{ width: '100%', margin: '10px 0px 10px 0px' }}
        id="outlined-textarea"
        label="아이디"
        placeholder="아이디를 입력하세요"
        multiline
      />
      <TextField
        sx={{ width: '100%' }}
        id="outlined-textarea"
        label="PassWord"
        placeholder="비밀번호를 입력하세요"
        multiline
      />
      <Box className={classes.root}>
        <Button className={classes.text}>Contained</Button>
      </Box>
    </Box>
  );
};

export default Auth;
