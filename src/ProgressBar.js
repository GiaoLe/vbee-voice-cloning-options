import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

const ProgressBar = () => {
    return (
        <LinearProgress
            sx={{
                '& .MuiLinearProgress-barColorPrimary': {
                    backgroundColor: 'yellow'
                }
            }}
        />
    );
};

export default ProgressBar;
