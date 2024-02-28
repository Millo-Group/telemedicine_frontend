import React, { useState } from "react";
import styles from "./index.module.css";
import IconButton from "../IconButton";
import useChat from "../../hooks/useChat";

function ChatInput() {
  const { sendMessage } = useChat();
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className={styles.root}>
      <input
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        className="form-control b-0"
        style={{padding:'10px 10.5px'}}
        placeholder="Say Something..."
        type="text"
      ></input>
      <div className={`d-flex justify-content-between aling-items-center mt-md-0 ${styles.hoverclass}`}>
      <IconButton className={`btn  ${styles.textbutton}`}>
        <span className="material-symbols-outlined" style={{fontSize:'15px'}}>link</span>
      </IconButton>
      <IconButton className={`btn  ${styles.textbutton}`} onClick={handleSendMessage}>
      <span className="material-symbols-outlined" style={{fontSize:'15px'}}>mic</span>
      </IconButton>
          <IconButton className={`btn  ${styles.textbutton}`}>
          <span className="material-symbols-outlined" style={{fontSize:'15px'}}>send</span>
      </IconButton>
      </div>

    </div>
  );
}

export default ChatInput;
