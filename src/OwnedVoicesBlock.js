import {Box} from "@mui/material";
import * as React from "react";
import OwnedVoiceItem from "./OwnedVoiceItem";
import Typography from "@mui/material/Typography";

function OwnedVoicesBlock() {
    const data = [{
        id: 1, name: 'Tên giọng A', region: 'HN'
    }, {
        id: 2, name: 'Tên giọng B', region: 'HN'
    }, {
        id: 3, name: 'Tên giọng C', region: 'SG'
    }];
    return <Box>
        <Typography sx={{fontWeight: 'bold', fontSize: '20px', margin: '20px 0 20px 0'}}>Giọng của tôi</Typography>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
            {data.map((item) => {
                    return <OwnedVoiceItem voiceItem={item} key={item.id}/>
                }
            )}
        </Box>
    </Box>;
}

export default OwnedVoicesBlock;