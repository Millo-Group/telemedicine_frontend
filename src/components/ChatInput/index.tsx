import React, { useState } from "react";
import styles from "./index.module.css";
import IconButton from "../IconButton";
import useChat from "../../hooks/useChat";

interface chatInputProps {
  placeholder?: string;
  handleSend?: (message: string)=> void;
}
function ChatInput({placeholder, handleSend}: chatInputProps) {
  const { sendMessage } = useChat();
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    sendMessage(message);
    if(handleSend) 
    {
      handleSend(message)
    }
    setMessage("");
  };

  return (
    <div className={styles.root}>
      <input
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        className="form-control b-0"
        style={{padding:'10px 10.5px',fontFamily:'IBM Plex Sans, sans-serif',boxShadow:'none'}}
        placeholder={placeholder?placeholder: "Say something..."}
        type="text"
      ></input>
      <div className={`d-flex justify-content-between ${styles.hoverclass}`}>
      <IconButton className={`material-symbols-outlined  ${styles.textbutton}`}>
        link
      </IconButton>
      <IconButton className={`material-symbols-outlined ${styles.textbutton}`}>
      mic
      </IconButton>
      </div>
        <div className={styles.sendButtonhover} onClick={handleSendMessage}>
          <IconButton className="material-symbols-outlined">
          send
      </IconButton>
        </div>

    </div>
  );
}

export default ChatInput;
