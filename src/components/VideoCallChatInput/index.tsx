import React, { useState } from "react";
import styles from "./index.module.css";
import IconButton from "../IconButton";

interface ChatInputProps {
  placeholder?: string;
  handleSend?: (message: string) => void;
}

function VideoCallChatInput({ placeholder, handleSend }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSendMessage = (e: any) => {
    console.log(e.target);

    e.preventDefault();
    if (message?.length > 0 && handleSend) {
      handleSend(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSendMessage}>
      <div className={styles.root}>
        <div>
          <IconButton className={`material-symbols-outlined ${styles.linkbutton}`}>
            link
          </IconButton>
        </div>
        <input
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="form-control b-0"
          style={{ padding: '10px 10.5px', fontFamily: 'IBM Plex Sans, sans-serif', boxShadow: 'none', backgroundColor: '#EADDFF', color: '#000000' }}
          placeholder={placeholder ? placeholder : "Say something..."}
          type="text"
        />
        <div>
          <IconButton className={`material-symbols-outlined ${styles.micbutton}`}>
            mic
          </IconButton>
        </div>
        <IconButton className={`${styles.sendButtonhover} material-symbols-outlined`} onClick={(message?.length == 0) ? undefined : handleSendMessage} disabled={message?.length == 0}>
          send
        </IconButton>
      </div>
    </form>
  );
}

export default VideoCallChatInput;
