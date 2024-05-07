import ChangeVoiceNamePopUp from "./ChangeVoiceNamePopUp";
import DeleteVoicePopUp from "./DeleteVoicePopUp";
import React, {useState} from "react";
import ProcessingVoicePopUp from "./ProcessingVoicePopUp";

function ProcessingVoicePopUpManager({open, setOpen, voiceItem}) {
    const [isChangeVoiceNamePopUpOpen, setChangeVoiceNamePopUpOpen] = useState(false);
    const [isDeleteVoicePopUpOpen, setDeleteVoicePopUpOpen] = useState(false);
    return <>
        <ProcessingVoicePopUp open={open}
                              setOpen={setOpen}
                              voiceItem={voiceItem}
                              setChangeVoiceNamePopUpOpen={setChangeVoiceNamePopUpOpen}
                              setDeleteVoicePopUpOpen={setDeleteVoicePopUpOpen}/>
        <ChangeVoiceNamePopUp open={isChangeVoiceNamePopUpOpen} setOpen={setChangeVoiceNamePopUpOpen}
                              voiceItem={voiceItem}/>
        <DeleteVoicePopUp open={isDeleteVoicePopUpOpen} setOpen={setDeleteVoicePopUpOpen} voiceItem={voiceItem}/>
    </>
}

export default ProcessingVoicePopUpManager;