import * as React from "react";
import VoiceInfoBox from "./VoiceInfoBox";

function MyVoiceItem({item}) {
    return <VoiceInfoBox item={item} isProcessing={false}/>;
}

export default MyVoiceItem;