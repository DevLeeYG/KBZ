import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import { headstyle } from '../../../makeStyles/Homehead';
import BasicMenu from './headsource/BasicMenu';
import DropMenu from './headsource/DropMenu';
import SubSidebar from '../../Home/HomeHead/headsource/SubSidebar';
import UserAlarm from '../../Home/HomeHead/headsource/UserAlarm';
const drawerWidth = 240;
// const Switchs = withStyles({
//   switchBase: {
//     '&$disabled': {
//       color: 'yellow',
//     },
//     '&$disabled + $track': {
//       backgroundColor: 'green',
//       opacity: 0.5,
//     },
//   },
//   track: {},
//   disabled: {},
// })(MuiSwitch);
interface Props {
  window?: () => Window;
}

const HomeHad = (props: Props) => {
  const classes = headstyle();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List></List>
      <Divider />
      <List></List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        // className={classes.Appbar}
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar className={classes.root}>
          <Box sx={{ width: '100px' }}>
            <DropMenu />
          </Box>
          <Box sx={{ width: 300 }}>
            <Box className={classes.LogoBox}>
              <CardMedia component="img" alt="logo" image="/new_logo.webp" />
            </Box>
          </Box>
          <Box className={classes.menuBtn}>
            <SubSidebar />
          </Box>
          <Box className={classes.Alarm}>
            <UserAlarm />
          </Box>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
};

export default HomeHad;

{
  /* <Typography
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
</Typography> */
}

{
  /* <Box>
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
  <Typography sx={{ fontSize: '15px', p: 2 }}>
    <Box sx={{ marginRight: '10px' }}>로그아웃</Box>
    <LogoutIcon />
  </Typography>
</Paper>
</Box> */
}
{
}
