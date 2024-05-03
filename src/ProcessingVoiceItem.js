import VoiceInfoBox from "./VoiceInfoBox";

function ProcessingVoiceItem({voiceItem}) {
    return <VoiceInfoBox voiceItem={voiceItem} isProcessing={true}/>
}

export default ProcessingVoiceItem;