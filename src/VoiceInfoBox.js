import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Grid, Paper, Stack} from "@mui/material";
import MoreButton from "./MoreButton";
import StateBox from "./StateBox";


//TODO: Insert voice data here
function VoiceInfoBox({voiceItem, isProcessing}) {
    return (<Paper elevation={4} sx={{padding: '10px 0 10px 0', borderRadius: '15px'}}>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={3} alignItems="center">
                    <img src="https://via.placeholder.com/80" alt="avatar"/>
                </Grid>
                <Grid item xs={7}>
                    <Stack spacing={0.5}>
                        <Typography variant="body1"><strong>{voiceItem.name} &middot; {voiceItem.region}</strong></Typography>
                        <Typography variant="body2" sx={{color: '#3C3C43A3'}}>Review phim &middot; Nam &middot; 22 tuổi</Typography>
                        {isProcessing && <StateBox processed={voiceItem.processed}/>}
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <MoreButton isProcessing={isProcessing} voiceItem={voiceItem}/>
                </Grid>
            </Grid>
        </Paper>);
}

export default VoiceInfoBox;
