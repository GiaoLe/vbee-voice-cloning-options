import * as React from "react";
import OwnedVoicesBlock from "./OwnedVoicesBlock";
import ProcessingVoicesBlock from "./ProcessingVoicesBlock";
import AddVoiceButton from "./AddVoiceButton";
import {Container, Divider} from "@mui/material";

function Body() {
    return (<Container>
        <ProcessingVoicesBlock/>
        <Divider sx={{borderColor: '#dfe0e5', borderWidth: '1px', margin: '20px'}}/>
        <OwnedVoicesBlock/>
        <AddVoiceButton/>
    </Container>);
}

export default Body;