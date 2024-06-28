import { JaaSMeeting } from "@jitsi/react-sdk";
import styles from "./index.module.css";
import Chat from "../Chat";
import useChat from "../../hooks/useChat";
import VideoCallChat from "../VideoCallChat";
import { useState, useEffect } from "react";
import IconButton from "../IconButton";

type Props = {
  jwt: string;
  roomName: string;
};

function Meeting(props: Props) {
  const { setApi, setCurrentAppointment } = useChat();
  const [isFullscreen, setIsFullscreen] = useState(false); // State to manage fullscreen mode

  const readyToClose = () => {
    setCurrentAppointment({});
    if (isFullscreen) {
      toggleFullscreen();
    }
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

  const toggleFullscreen = () => {
    const iframe = document.querySelector("iframe");
    if (iframe) {
      if (!isFullscreen) {
        iframe.style.position = "fixed";
        iframe.style.top = "0";
        iframe.style.left = "0";
        iframe.style.width = "100%";
        iframe.style.height = "100%";
        iframe.style.zIndex = "9999";
        setIsFullscreen(true);
      } else {
        iframe.style.position = "relative";
        iframe.style.width = "100%";
        iframe.style.height = "351px"; // Set back to original height
        setIsFullscreen(false);
      }
    }
  };

  return (
    <div className={isFullscreen? styles.fullscreenRoot: styles.root}>
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
          iframeRef.style.height = "351px";
        }}
        {...props}
      />
      <div className={isFullscreen?styles.fullsizebutton:  styles.fullscreenButton} onClick={toggleFullscreen}>
        <span>
        {/* {isFullscreen ? "Exit Fullscreen " : "Enter Fullscreen"} */}
        {
          isFullscreen ?
          <IconButton className={`material-symbols-outlined ${styles.fullscreenButton}`} >
          zoom_in_map
         </IconButton>
          :
          <IconButton className={`material-symbols-outlined ${styles.fullscreenButton}`} >
          zoom_out_map
         </IconButton>
        }
       
        </span>
      </div>
      <div className={styles.chat}>
        <VideoCallChat />
      </div>
    </div>
  );
}

export default Meeting;
