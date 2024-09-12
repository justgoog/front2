import * as React from 'react';
import Button from '@mui/material/Button';

const BlueButton = () => {
  const style = {
    backgroundColor: '#87CEEB', // 蓝色背景
    color: '#FFFFFF', // 白色文字
    '&:hover': {
      backgroundColor: '#0000E0', // 鼠标悬停时的背景颜色
    },
  };

  return (
    <Button variant="contained" style={style}>
      Apply
    </Button>
  );
};

export default BlueButton;