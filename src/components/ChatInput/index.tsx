import React, { useState } from "react";
import styles from "./index.module.css";
import IconButton from "../IconButton";
import useChat from "../../hooks/useChat";
import { useApi } from "../../hooks/useApi";
import useChatBot from "../../hooks/useChatBot";

interface ChatInputProps {
  placeholder?: string;
  handleSend?: (message: string, response?:string) => void;
  eventId?: string
}

function ChatInput({ placeholder, handleSend, eventId }: ChatInputProps) {
  const { sendMessage } = useChat();
  const {chatLoading} = useChatBot()
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const api = useApi();

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
        disabled={chatLoading} // Disable input while loading
      />
      <div className={`d-flex justify-content-between ${styles.hoverclass}`}>
        <IconButton className={`material-symbols-outlined ${styles.textbutton}`} disabled={chatLoading}>
          link
        </IconButton>
        <IconButton className={`material-symbols-outlined ${styles.textbutton}`} disabled={chatLoading}>
          mic
        </IconButton>
      </div>
      <div className={styles.sendButtonhover} onClick={(chatLoading || message?.length == 0) ? undefined : handleSendMessage}>
        <IconButton className="material-symbols-outlined" disabled={chatLoading || message?.length == 0}>
          send
        </IconButton>
      </div>
    </div>
  );
}

export default ChatInput;
