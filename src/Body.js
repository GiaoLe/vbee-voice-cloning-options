import * as React from "react";
import MyVoicesBlock from "./MyVoicesBlock";
import ProcessingBlock from "./ProcessingBlock";

function Body() {
    return (<>
        <ProcessingBlock/>
        <MyVoicesBlock/>
    </>);
}

export default Body;