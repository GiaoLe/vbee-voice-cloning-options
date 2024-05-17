import React, {useState} from "react";
import OwnedVoicePopUp from "./OwnedVoicePopUp";
import ChangeVoiceNamePopUp from "./ChangeVoiceNamePopUp";
import DeleteVoicePopUp from "./DeleteVoicePopUp";
import PublishVoicePopUp from "./PublishVoicePopUp";

function OwnedVoicePopUpManager({open, setOpen, voiceItem}) {
    const [isChangeVoiceNamePopUpOpen, setChangeVoiceNamePopUpOpen] = useState(false);
    const [isDeleteVoicePopUpOpen, setDeleteVoicePopUpOpen] = useState(false);
    const [isPublishVoicePopUpOpen, setPublishVoicePopUpOpen] = useState(false);

    return (<>
            <OwnedVoicePopUp open={open} setOpen={setOpen} voiceItem={voiceItem}
                             setChangeVoiceNamePopUpOpen={setChangeVoiceNamePopUpOpen}
                             setDeleteVoicePopUpOpen={setDeleteVoicePopUpOpen}
                             setPublishVoicePopUpOpen={setPublishVoicePopUpOpen}/>
            <PublishVoicePopUp open={isPublishVoicePopUpOpen} setOpen={setPublishVoicePopUpOpen} voiceItem={voiceItem}/>
            {/*TODO: Implement "Sử dụng ngay" button*/}
            <ChangeVoiceNamePopUp open={isChangeVoiceNamePopUpOpen} setOpen={setChangeVoiceNamePopUpOpen}
                                  voiceItem={voiceItem}/>
            <DeleteVoicePopUp open={isDeleteVoicePopUpOpen} setOpen={setDeleteVoicePopUpOpen} voiceItem={voiceItem}/>
        </>);
}

export default OwnedVoicePopUpManager;