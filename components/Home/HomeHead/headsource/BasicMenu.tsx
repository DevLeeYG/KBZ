import React from 'react';
import { Box, Typography } from '@mui/material';
import { headstyle } from '../../../../makeStyles/Homehead';
const BasicMenu = () => {
  const classes = headstyle();

  return (
    <div>
      <Box>
        <Typography className={classes.BoxLeft} component="span">
          김반장
        </Typography>
        <Typography className={classes.BoxLeft} component="span">
          업무요청
        </Typography>
        <Typography className={classes.BoxLeft} component="span">
          게시판
        </Typography>
      </Box>
    </div>
  );
};

export default BasicMenu;
