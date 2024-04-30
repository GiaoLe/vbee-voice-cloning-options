import {Box} from "@mui/material";
import * as React from "react";
import MyVoiceItem from "./MyVoiceItem";
import Typography from "@mui/material/Typography";

function OwnedVoicesBlock() {
    const data = [{
        id: 1, name: 'A'
    }, {
        id: 2, name: 'B'
    }, {
        id: 3, name: 'C'
    }];
    return <Box>
        <Typography sx={{fontWeight: 'bold', fontSize: '20px', margin: '20px 0 20px 0'}}>Giọng của tôi</Typography>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
            {data.map((item) => {
                    return <MyVoiceItem item={item} key={item.id}/>
                }
            )}
        </Box>
    </Box>;
}

export default OwnedVoicesBlock;