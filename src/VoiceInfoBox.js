import * as React from 'react';
import Typography from '@mui/material/Typography';
import {Card, Grid, Stack} from "@mui/material";
import MoreButton from "./MoreButton";

function VoiceInfoBox({voiceItem, isProcessing}) {
    const {name, state} = voiceItem;
    return (
        <Card sx={{padding: '10px 0 10px 0', borderRadius: '15px'}}>
            <Grid container spacing={1} alignItems="center">
                <Grid item xs={2}>
                    <img src="https://via.placeholder.com/30" alt="avatar"/>
                </Grid>
                <Grid item xs={8}>
                    <Stack>
                        <Typography variant="body1"><strong>{name} &middot; HN</strong></Typography>
                        <Typography variant="body2" sx={{color: '#3C3C43A3'}}>Review phim. Nam. 22 tuổi</Typography>
                        {isProcessing && <Typography variant="body1">{state}</Typography>}
                    </Stack>
                </Grid>
                <Grid item xs={2}>
                    <MoreButton isProcessing={isProcessing} voiceItem={voiceItem}/>
                </Grid>
            </Grid>
        </Card>
    );
}

export default VoiceInfoBox;
