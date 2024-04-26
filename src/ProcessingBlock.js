import ProcessingVoiceItem from "./ProcessingVoiceItem";
import {Box} from "@mui/material";

function ProcessingBlock() {
    //Fetch data from the server
    const data = [
        {
            id: 1,
            name: 'A',
            state: 'processing'
        },
        {
            id: 2,
            name: 'B',
            state: 'processing'
        },
        {
            id: 3,
            name: 'C',
            state: 'received'
        }
    ];
    return <>
        <h1>Đang xử lý</h1>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
            {data.map((item) => (
                <ProcessingVoiceItem key={item.id} item={item}/>
            ))}
        </Box>
    </>;
}

export default ProcessingBlock;