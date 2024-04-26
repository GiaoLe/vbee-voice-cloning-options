import {ButtonBase, ListItem, ListItemText, Typography} from "@mui/material";
import React from "react";

function PopUpMenuItem({name, handleClick}) {
    return (
        <ListItem>
            <ButtonBase onClick={handleClick} style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <ListItemText
                    primary={
                        <Typography color={name === "Xóa" ? 'error' : 'inherit'}>
                            {name}
                        </Typography>
                    }
                />
            </ButtonBase>
        </ListItem>
    );
}

export default PopUpMenuItem;