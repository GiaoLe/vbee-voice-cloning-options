import * as React from 'react';
import Button from '@mui/material/Button';

function AddVoiceButton() {
    return (<Button
        variant="contained"
        sx={{
            backgroundColor: '#FFD60A',
            color: 'black',
            borderRadius: '50%', // Make the button round
            width: '64px', // Set equal width and height
            height: '64px',
            minWidth: 0,
            border: '1px solid #e0e0e0',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            position: 'fixed', // Key for fixed positioning
            bottom: 16, // Adjust spacing from the bottom
            right: 16, // Adjust spacing from the right
            '&:hover': {
                backgroundColor: '#ffd700',
            },
        }}
    >
        +
    </Button>);
}

export default AddVoiceButton;
