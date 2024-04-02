import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import ChatInput from "../ChatInput";
import ChatMessage from "../ChatMessage";
import useChat from "../../hooks/useChat";
import Avatar from "../../assets/images/avatar.jpg";
import useApi from "../../hooks/useApi";
import { useLocation } from "react-router-dom";

function Chat() {
  const { messages } = useChat();
  const api = useApi();
  const { state } = useLocation();
  const [patientName, setPatientName] = useState("");

  const getEventsDetails = async () => {
    try {
      let {
        data: { display_name },
      } = await api.get(`events/${state.event_id}/details`);
      setPatientName(display_name);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getEventsDetails();
    }, 500);
  }, []);

  return (
    <div className={`box ${styles.root}`}>
      <div className="box-header p-0 pt-3 pb-2">
        <div className="media align-items-top p-0">
          <img className="avatar avatar-lg mx-0" src={Avatar} alt="avatar" />
          <div className="d-flex d-block justify-content-between align-items-center w-p100">
            <div className="media-body mb-lg-0 mb-0">
              {patientName && (
                <>
                  <p
                    className="fs-14"
                    style={{ fontFamily: "sans-serif", fontWeight: "bold" }}
                  >
                    {patientName}
                  </p>
                  <p className="fs-12">Last Seen 10:30pm ago</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chat_list}>
        {messages.map((message, index) => (
          <ChatMessage key={index} data={message} patientclass={false} />
        ))}
        <div className={styles.chat_end} />
      </div>
      <div className={styles.footer}>
        <ChatInput />
      </div>
    </div>
  );
}

export default Chat;
