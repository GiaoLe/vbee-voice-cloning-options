import VoiceInfoBox from "./VoiceInfoBox";

function ProcessingVoiceItem({item}) {
    return <VoiceInfoBox item={item} isProcessing={true}/>
}

export default ProcessingVoiceItem;