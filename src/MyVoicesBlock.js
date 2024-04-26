import {Box} from "@mui/material";
import * as React from "react";
import MyVoiceItem from "./MyVoiceItem";

function MyVoicesBlock() {
    const data = [{
        id: 1, name: 'A'
    }, {
        id: 2, name: 'B'
    }, {
        id: 3, name: 'C'
    }];
    return <Box>
        <h1>Giọng của tôi</h1>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
            {data.map((item) => {
                    return <MyVoiceItem item={item} key={item.id}/>
                }
            )}
        </Box>
    </Box>;
}

export default MyVoicesBlock;