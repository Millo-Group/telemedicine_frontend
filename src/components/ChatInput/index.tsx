import React, { useState } from "react";
import styles from "./index.module.css";
import IconButton from "../IconButton";
import useChat from "../../hooks/useChat";


interface ChatInputProps {
  placeholder?: string;
  handleSend?: (message: string, response?: number) => void;
  eventId?: number
}

function ChatInput({ placeholder, handleSend, eventId }: ChatInputProps) {
  const { sendMessage } = useChat();
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    if (handleSend) {
      sendMessage(message);
      handleSend(message, eventId);
      setMessage("")
    }
  };

  return (
    <div className={styles.root}>
      <input
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        className="form-control b-0"
        style={{ padding: '10px 10.5px', fontFamily: 'IBM Plex Sans, sans-serif', boxShadow: 'none' }}
        placeholder={placeholder ? placeholder : "Say something..."}
        type="text"
      />
      <div className={`d-flex justify-content-between ${styles.hoverclass}`}>
        <IconButton className={`material-symbols-outlined ${styles.textbutton}`}>
          link
        </IconButton>
        <IconButton className={`material-symbols-outlined ${styles.textbutton}`}>
          mic
        </IconButton>
      </div>
      <IconButton className={`${styles.sendButtonhover} material-symbols-outlined`} onClick={(message?.length == 0) ? undefined : handleSendMessage} disabled={message?.length == 0}>
        send
      </IconButton>
    </div>
  );
}

export default ChatInput;
