import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Divider, Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { isJSDocCommentContainingNode } from 'typescript';
export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [select, setSelect] = useState([
    { id: 0, menu: '김반장' },
    { id: 1, menu: '업무요청' },
    { id: 2, menu: '게시판' },
  ]);
  const [choice, setChoice] = useState(select[0].menu);

  const handleChoice = (id: number) => {
    setChoice(select[id].menu);
    setAnchorEl(null);
  };

  const menudata = select.map((el) => {
    return (
      <Typography
        onClick={() => handleChoice(el.id)}
        key={el.id}
        sx={{ p: 0.5, width: '90px' }}
      >
        {el.menu}
      </Typography>
    );
  });
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
        {menudata}
      </Popover>
    </div>
  );
}
