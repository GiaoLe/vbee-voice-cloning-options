import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


function BlockColumn() {
    const blocksData = [
        {title: 'Block 1', content: 'ABC'},
        {title: 'Block 2', content: 'CBA'},
    ];
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
            {blocksData.map((block) => (
                <Box key={block.title} sx={{border: '1px solid lightgray', padding: 2, borderRadius: 1}}>
                    <Typography variant="h6" gutterBottom>
                        {block.title}
                    </Typography>
                    <Typography>
                        {block.content}
                    </Typography>
                </Box>
            ))}
        </Box>
    );
}

export default BlockColumn;
