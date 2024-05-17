import {Box, Container, InputAdornment, Stack, TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import EmailIcon from '@mui/icons-material/Email';

function Body() {
    return (
        <Container>
            <Stack alignItems="center" spacing={2} sx={{marginTop: '80px'}}>
                <Typography variant="h6" sx={{fontSize: '16px'}}>Nhập Email</Typography>
                <TextField
                    placeholder="Email"
                    sx={{
                        width: '311px',
                        height: '44px',
                        borderRadius: '20px',
                        '& fieldset': {borderRadius: '20px'}
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon sx={{color: 'black'}}/>
                            </InputAdornment>
                        ),
                    }}
                />
                <Box><Typography align="center" variant="body2" sx={{
                    marginTop: '16px',
                    width: '343px',
                    height: '40px',
                    borderRadius: '16px',
                    fontSize: '14px',
                    color: '#007AFF',
                    backgroundColor: '#007AFF1A',
                    padding: '8px',
                }}>Việc xử lý giọng đọc sẽ mất chút
                    thời gian.<br/> Chúng tôi sẽ báo lại cho bạn sau khi đã xử lý xong.</Typography></Box>
            </Stack>
        </Container>
    );
}

export default Body;