import ProcessingVoiceCard from "./ProcessingVoiceItem";
import {Box} from "@mui/material";
import Typography from "@mui/material/Typography";

function ProcessingVoicesBlock() {
    //Fetch data from the server
    const data = [
        {
            id: 1,
            name: 'Tên giọng A',
            state: 'processing',
            region: 'HN'
        },
        {
            id: 2,
            name: 'Tên giọng B',
            state: 'processing',
            region: 'HN'
        },
        {
            id: 3,
            name: 'Tên giọng C',
            state: 'received',
            region: 'SG'
        }
    ];
    return <>
        <Typography sx={{fontWeight: 'bold', fontSize: '20px', margin: '20px 0 20px 0'}}>Đang xử lý</Typography>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
            {data.map((item) => (
                <ProcessingVoiceCard key={item.id} voiceItem={item}/>
            ))}
        </Box>
    </>;
}

export default ProcessingVoicesBlock;