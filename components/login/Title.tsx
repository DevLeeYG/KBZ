import { Box, Container } from '@material-ui/core';
import React from 'react';
import LockIcon from '@mui/icons-material/Lock';

const Title = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '50px',
          paddingTop: '10px',
        }}
      >
        <LockIcon fontSize="large" />
      </Box>
      <Box sx={{ fontSize: '20', padding: '10px' }}>상황판 로그인</Box>
    </Box>
  );
};

export default Title;
