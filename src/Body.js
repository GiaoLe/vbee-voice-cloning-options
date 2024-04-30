import * as React from "react";
import MyVoicesBlock from "./MyVoicesBlock";
import ProcessingBlock from "./ProcessingBlock";
import AddVoiceButton from "./AddVoiceButton";
import {Container} from "@mui/material";

function Body() {
    return (<Container>
        <ProcessingBlock/>
        <MyVoicesBlock/>
        <AddVoiceButton/>
    </Container>);
}

export default Body;