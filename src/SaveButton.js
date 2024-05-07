import Button from "@mui/material/Button";

function SaveButton({onClick}) {
    return <Button onClick={onClick} sx={{
        backgroundColor: '#FFD60A', borderRadius: '20px', width: '100%',
    }}>Lưu</Button>
}

export default SaveButton;