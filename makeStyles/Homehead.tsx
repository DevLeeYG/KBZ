import { makeStyles } from '@material-ui/core';

export const headstyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '80px',
    backgroundColor: '#294ec7',
  },
  headLeft: {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'center',

    height: '80px',
  },
  headLeftInner: {
    marginLeft: '15px',
    marginRight: '15px',
  },
  mediaBox: {
    position: 'relative',
  },
  media: {
    width: '180px',
  },
}));
