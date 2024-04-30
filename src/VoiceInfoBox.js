import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";
import MoreButton from "./MoreButton";
import StyledBox from "./StyledBox";

function VoiceInfoBox({item, isProcessing}) {
    console.log(isProcessing);
    const {name, state} = item;
    return (
        <StyledBox>
            <Box sx={{width: 50, height: 50, backgroundColor: '#cccccc'}}>
            </Box>
            <Grid>
                <Typography variant="body1">{name}. HN</Typography>
                <Typography variant="body1">Review phim. Nam. 22 tuổi</Typography>
                {isProcessing && <Typography variant="body1">{state}</Typography>}
            </Grid>
            <MoreButton isProcessing={isProcessing}/>
        </StyledBox>
    );
}

export default VoiceInfoBox;
