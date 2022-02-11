import { Container, Box } from '@material-ui/core';
import type { NextPage } from 'next';
import Auth from '../components/login/Auth';

import Title from '../components/login/Title';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          bgcolor: '#cfe8fc',
          height: '100vh',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ border: '1px solid yellow' }}>
          <Title />
          <Auth />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
