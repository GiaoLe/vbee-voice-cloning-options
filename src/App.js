import './App.css';
import * as React from 'react';
import MobileHeader from "./MobileHeader";
import Body from "./Body";
import YellowPlusButton from "./YellowPlusButton";

function App() {
    return (<>
            <MobileHeader/>
            <Body/>
            <YellowPlusButton/>
        </>
    );
}

export default App;
