import Header from "./Header";
import Body from "./Body";
import {Box, Stack} from "@mui/material";
import * as React from "react";
import SendVoiceRequestButton from "./SendVoiceRequestButton";

export default function App2() {
    return (
        <Stack alignItems="center" sx={{backgroundColor: '#f5f7fb', height: '100vh'}}>
            <Header/>
            <Body/>
            <SendVoiceRequestButton/>
        </Stack>

    )
}