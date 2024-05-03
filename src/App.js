import './App.css';
import * as React from 'react';
import Header from "./Header";
import Body from "./Body";
import {Box} from "@mui/material";

function App() {
    return (<Box sx={{backgroundColor: '#DAEAFF', height: '100vh'}}>
            <Header/>
            <Body/>
        </Box>
    );
}

export default App;
