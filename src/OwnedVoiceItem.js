import * as React from "react";
import VoiceInfoBox from "./VoiceInfoBox";

function OwnedVoiceItem({voiceItem}) {
    return <VoiceInfoBox voiceItem={voiceItem} isProcessing={false}/>;
}

export default OwnedVoiceItem;