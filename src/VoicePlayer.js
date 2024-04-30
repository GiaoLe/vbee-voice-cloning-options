import React, {useEffect, useRef, useState} from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import {Stack} from "@mui/material";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import IconButton from "@mui/material/IconButton";

const VoicePlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const progressRef = useRef(0);

    useEffect(() => {
        let timer;
        if (isPlaying) {
            timer = setInterval(() => {
                progressRef.current += 1;
                if (progressRef.current >= 100) {
                    progressRef.current = 0;
                    setIsPlaying(false);
                }
                setProgress(progressRef.current);
            }, 100);
        }
        return () => {
            clearInterval(timer);
        };
    }, [isPlaying]);

    const handleClick = () => {
        setIsPlaying(oldPlaying => !oldPlaying);
    };

    return (
        <Stack spacing={2} direction="row" justifyContent="center" alignItems="center"
               sx={{padding: '10px 10px 10px 10px',
               backgroundColor: '#1E164E0A'}}>
            <IconButton sx={{borderRadius: '50%',
                backgroundColor: '#FFD60A',
                '&:hover': {
                    backgroundColor: '#FFD60A'
                }}}
                        onClick={handleClick}
                        aria-label={isPlaying ? 'pause' : 'play'}>
                {isPlaying ? <PauseIcon/> : <PlayArrowIcon/>}
            </IconButton>
            <LinearProgress variant="determinate" value={progress}
                            sx={{flexGrow: 1,
                                transition: 'none',
                                height: '8px',
                                backgroundColor: '#1E164E14',
                                '.MuiLinearProgress-bar': { backgroundColor: '#FFD60A' }
            }}/>
        </Stack>
    );
};

export default VoicePlayer;