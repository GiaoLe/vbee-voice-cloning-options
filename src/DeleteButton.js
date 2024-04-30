import Button from "@mui/material/Button";

function DeleteButton({onClick}) {
    return (<Button fullWidth sx={{
        margin: '20px 0 0 0',
        background: 'rgba(255, 59, 48, 0.16)',
        border: '1px solid rgba(255, 59, 48, 0.16)',
        color: 'red'
    }}
                    onClick={onClick}>
        Xóa
    </Button>);
}

export default DeleteButton;