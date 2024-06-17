import { JaaSMeeting } from "@jitsi/react-sdk";
import styles from "./index.module.css";
import useChat from "../../hooks/useChat";
import PatientChat from "./PatientChat/index";
import { useState, useRef } from "react";
import { IJitsiMeetExternalApi } from "@jitsi/react-sdk/lib/types";

type Props = {
  jwt: string;
  roomName: string;
};

function Meeting(props: Props) {
  const { setApi, setCurrentAppointment } = useChat();
  const [isChatDisplay, setIsChatDisplay] = useState(false);
  const jitsiApiRef = useRef<IJitsiMeetExternalApi | null>(null); // Create a ref to store the Jitsi API instance

  const readyToClose = () => {
    setCurrentAppointment({});
  };

  const toggleChatModal = () => {
    setIsChatDisplay(!isChatDisplay);
  };

  const handleJitsiApi = (action: string) => {
    if (jitsiApiRef.current) {
      switch (action) {
        case "toggleVideo":
          jitsiApiRef.current.executeCommand('toggleVideo');
          break;
        case "toggleAudio":
          jitsiApiRef.current.executeCommand('toggleAudio');
          break;
        case "hangup":
          jitsiApiRef.current.executeCommand('hangup');
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className={styles.root}>
      <JaaSMeeting
        appId="vpaas-magic-cookie-2245ac56e2d94efe9ab7ef727989f4b1"
        onApiReady={(api) => {
          setApi(api);
          jitsiApiRef.current = api; 
          api.addListener("readyToClose", readyToClose);
        }}
        interfaceConfigOverwrite={{
          TOOLBAR_BUTTONS: [], // Hide all built-in toolbar buttons
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

      {/* Custom Toolbar */}
      <div>
        <div className={styles.videoCallOption}>
          <div className="d-flex justify-content-around">
            <div className="py-3 footer-bottom-menu-call" onClick={() => handleJitsiApi('toggleVideo')}>
              <span className="material-symbols-outlined">
                videocam
              </span>
            </div>
            <div className="py-3 footer-bottom-menu-call" onClick={() => handleJitsiApi('toggleAudio')}>
              <span className="material-symbols-outlined">
                keyboard_voice
              </span>
            </div>
            <div className="py-3 footer-bottom-menu-call" onClick={() => handleJitsiApi('hangup')}>
              <span className="material-symbols-outlined text-danger">
                call_end
              </span>
            </div>
            <div className="py-3 footer-bottom-menu-call" onClick={toggleChatModal}>
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
