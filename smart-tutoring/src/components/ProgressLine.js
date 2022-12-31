import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 4,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? 'black' : '#308fe8',
  },
}));

export default function ProgressLine({ current, steps }) {
  console.log("progressValue", (current / steps) * 100);
  return (
    <Box sx={{ flexGrow: 1 }} paddingBottom={4} paddingTop={5}>
      <BorderLinearProgress variant="determinate"
        value={(current / steps) * 100}
      />
    </Box>
  );
}