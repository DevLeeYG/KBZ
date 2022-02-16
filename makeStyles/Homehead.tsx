import { makeStyles } from '@material-ui/core';

export const headstyle = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      height: '80px',
      width: '100%',
      color: 'white',
      justifyContent: 'space-between',
      backgroundColor: '#294ec7',
    },
  },

  BoxLeft: {
    [theme.breakpoints.up('xs')]: {},
  },
  LogoBox: {
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      height: '80px',
      width: '200px',
      alignItems: 'center',
    },
  },
  Logo: {
    [theme.breakpoints.up('xs')]: {
      width: '180px',
    },
  },
}));
