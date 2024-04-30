import Button from "@mui/material/Button";

function DeleteButton({onClick}) {
    return (<Button fullWidth sx={{
        margin: '20px 0 0 0',
        background: '#FF3B3029',
        border: '1px solid rgba(255, 59, 48, 0.16)',
        color: '#FF3B30',
        ":hover": {
            background: '#FF3B3029'
        }
    }}
                    onClick={onClick}>
        Xóa
    </Button>);
}

export default DeleteButton;