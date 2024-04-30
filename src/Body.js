import * as React from "react";
import OwnedVoicesBlock from "./OwnedVoicesBlock";
import ProcessingVoicesBlock from "./ProcessingVoicesBlock";
import AddVoiceButton from "./AddVoiceButton";
import {Container} from "@mui/material";

function Body() {
    return (<Container>
        <ProcessingVoicesBlock/>
        <OwnedVoicesBlock/>
        <AddVoiceButton/>
    </Container>);
}

export default Body;