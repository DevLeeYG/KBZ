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
      width: '120px',
      alignItems: 'center',
      marginLeft: '40px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '135px',
    },
    [theme.breakpoints.up('md')]: {
      width: '150px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '200px',
    },
  },
  Logo: {
    [theme.breakpoints.up('xs')]: {
      width: '180px',
    },
  },

  Alarm: {
    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  menuBtn: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));
