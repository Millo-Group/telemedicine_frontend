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
          iframeRef.style.height = "92vh";
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
          <div className="d-flex justify-content-around">
              <div className="py-3 footer-bottom-menu-call">
                <span className="material-symbols-outlined">
                  videocam
                </span>
            </div>
              <div className="py-3 footer-bottom-menu-call">
                <span className="material-symbols-outlined">
                  keyboard_voice
                </span>
            </div>
              <div className="py-3 footer-bottom-menu-call">
                <span className="material-symbols-outlined text-danger">
                  call_end
                </span>
            </div>
              <div
                className="py-3 footer-bottom-menu-call"
                onClick={toggleChatModal}
              >
                <span className="material-symbols-outlined">
                  chat_bubble
                </span>
              </div>
              <div className="py-3 footer-bottom-menu-call">
                <span className="material-symbols-outlined">
                  add_call
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meeting;
