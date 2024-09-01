import React from 'react';
import { Paper, Typography, Box, Theme } from '@mui/material';
import { SxProps } from '@mui/system';
import OverviewIcon from '@mui/icons-material/Dashboard'; 
import AgeSexDistributionChart from './AgeSexDistributionChart';

interface OverviewSectionProps {
  title: string;
  content: string;
  sx?: SxProps<Theme>;
}

const OverviewSection: React.FC<OverviewSectionProps> = ({ title, content, sx }) => {
  return (
    <Paper 
      elevation={3} 
      sx={{ 
        p: 3, 
        maxWidth: 1920, 
        m: 2, 
        ...sx,
      }}
    >
      <Box sx={{ display: 'inline-flex', alignItems: 'center', position: 'relative' }}>
      <OverviewIcon sx={{ mr: 1, mb: 1, color: 'purple' }} />
      <Typography variant="h5" component="h2" gutterBottom>
        {title}
      </Typography>
      <Box
          sx={{
            position: 'absolute',
            bottom: 4, // Adjust this value to change the distance between the text and the line
            left: 0,
            width: '100%',
            height: 2, // Thickness of the line
            bgcolor: 'purple', // Color of the line
          }}
        />
      </Box>
      <Box sx={{ mt: 2 }}>
      <AgeSexDistributionChart />
      </Box>
    </Paper>
  );
};

export default OverviewSection; 