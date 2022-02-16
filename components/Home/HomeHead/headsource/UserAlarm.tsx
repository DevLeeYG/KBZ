import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Divider, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { isJSDocCommentContainingNode } from 'typescript';
export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = useState(null);

  const [choice, setChoice] = useState('');

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Box sx={{ borderRadius: '25px' }}>
        <Button aria-describedby={id} onClick={handleClick}>
          <Box sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
            {choice} <KeyboardArrowDownIcon color="inherit" />
          </Box>
        </Button>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box>
          <Box>hi33741</Box>
          <Box></Box>
        </Box>
      </Popover>
    </div>
  );
}
