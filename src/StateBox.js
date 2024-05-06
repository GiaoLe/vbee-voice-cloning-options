import {Box} from "@mui/material";
import ProcessedStateBox from "./ProcessedStateBox";
import ProcessingStateBox from "./ProcessingStateBox";
function StateBox({processed}) {
    return processed ? <ProcessedStateBox/> : <ProcessingStateBox/>;
}

export default StateBox;