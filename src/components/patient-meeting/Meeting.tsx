import { JaaSMeeting } from "@jitsi/react-sdk";
import styles from "./index.module.css";
import useChat from "../../hooks/useChat";
import PatientChat from "./PatientChat/index";
import { useState } from "react";
type Props = {
  jwt: string;
  roomName: string;
};

function Meeting(props: Props) {
  const { setApi, setCurrentAppointment } = useChat();
  const [isChatDisplay, setIsChatDisplay] = useState(false);
  const readyToClose = () => {
    setCurrentAppointment({});
  };
  const toolbarButtons = [
    "camera",
    //  'chat',
    "closedcaptions",
    "desktop",
    "download",
    "embedmeeting",
    "etherpad",
    "feedback",
    "filmstrip",
    "fullscreen",
    "hangup",
    "help",
    "highlight",
    "invite",
    "linktosalesforce",
    "livestreaming",
    "microphone",
    "noisesuppression",
    "participants-pane",
    "profile",
    "raisehand",
    "recording",
    "security",
    "select-background",
    "settings",
    "shareaudio",
    "sharedvideo",
    "shortcuts",
    "stats",
    "tileview",
    "toggle-camera",
    "videoquality",
    "whiteboard",
  ];
  const toggleChatModal = () => {
    setIsChatDisplay(!isChatDisplay);
  };

  return (
    <div className={styles.root}>
      <JaaSMeeting
        appId="vpaas-magic-cookie-2245ac56e2d94efe9ab7ef727989f4b1"
        onApiReady={(api) => {
          setApi(api);
          api.addListener("readyToClose", readyToClose);
        }}
        interfaceConfigOverwrite={{
          TOOLBAR_BUTTONS: toolbarButtons,
        }}
        configOverwrite={{
          startWithVideoMuted: true,
          startWithAudioMuted: true,
          prejoinPageEnabled: false,
          enableRecording: true,
          pipEnabled: true,
        }}
        getIFrameRef={(iframeRef) => {
          iframeRef.style.height = "94vh";
        }}
        {...props}
      />
      {isChatDisplay && (
        <div className={styles.chat}>
          <PatientChat />
        </div>
      )}

      {/* Toolbar */}
      <div>
        <div className={styles.videoCallOption}>
          <div className="d-flex justify-content-center">
            <div className="p-3 flex-fill text-center">
              <div className="footer-bottom-menu-call">
                <span className="material-symbols-outlined mds-24 text-primary">
                  videocam
                </span>
              </div>
            </div>
            <div className="p-3 flex-fill text-center">
              <div className="footer-bottom-menu-call">
                <span className="material-symbols-outlined mds-24 text-primary">
                  keyboard_voice
                </span>
              </div>
            </div>
            <div className="p-3 flex-fill text-center">
              <div className="footer-bottom-menu-call">
                <span className="material-symbols-outlined mds-24 text-danger">
                  call_end
                </span>
              </div>
            </div>
            <div className="p-3 flex-fill text-center">
              <div
                className="footer-bottom-menu-call"
                onClick={toggleChatModal}
              >
                <span className="material-symbols-outlined mds-24 text-primary" >
                  chat_bubble
                </span>
              </div>
            </div>
            <div className="p-3 flex-fill text-center">
              <div className="footer-bottom-menu-call">
                <span className="material-symbols-outlined mds-24 text-primary">
                  add_call
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meeting;
