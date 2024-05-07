import Button from "@mui/material/Button";

function CancelButton({onClick}) {
    return <Button sx={{
        backgroundColor: '#dfe2e6', borderRadius: '20px', width: '100%'
    }}
                   onClick={onClick}
    >Hủy</Button>
}

export default CancelButton;