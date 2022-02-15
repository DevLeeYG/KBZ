import { Container, Box } from '@material-ui/core';
import type { NextPage } from 'next';
import Auth from '../components/login/Auth';
import { useSelector } from 'react-redux';
import Title from '../components/login/Title';

import styles from '../styles/Home.module.css';
import Index from '../components/Home/Index';

const Home: NextPage = () => {
  const dataLog = useSelector((state: any) => state.user.isLogin);

  return (
    <div>
      {dataLog ? (
        <Index />
      ) : (
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
      )}
    </div>
  );
};

export default Home;
