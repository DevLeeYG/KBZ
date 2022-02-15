import { Box, Button, Container } from '@material-ui/core';
import React, { useState } from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../reducer/user';
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
  const dispatch = useDispatch();
  const [values, setValues] = useState({ id: '', password: '' });
  const [isLogin, setIsLogin] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // input value 가져오기
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    if (values.id === 'hi33741' && values.password === '123') {
      setIsLogin(true);
      dispatch(loginAction(isLogin));
    } else {
      setIsLogin(false);
    }
  };

  return (
    <Box
      sx={{
        border: '1px solid black',
        width: '300px',
        height: '250px',
        padding: '15px',
      }}
    >
      <form>
        <TextField
          name="id"
          sx={{ width: '100%', margin: '10px 0px 10px 0px' }}
          label="아이디"
          placeholder="아이디를 입력하세요"
          onChange={handleChange}
        />
        <TextField
          name="password"
          sx={{ width: '100%' }}
          label="PassWord"
          placeholder="비밀번호를 입력하세요"
          onChange={handleChange}
        />
        <Box className={classes.root}>
          <Button onClick={handleSubmit} className={classes.text}>
            로그인
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Auth;
