import { useEffect, useState } from "react";
import styles from "./index.module.css";
import ChatInput from "../ChatInput";
import ChatMessage from "../ChatMessage";

import {useApi} from "../../hooks/useApi";
import { useLocation } from "react-router-dom";
import useChatBot from "../../hooks/useChatBot";
import VideoCallChatInput from "../VideoCallChatInput";
import useChat from "../../hooks/useChat";

function VideoCallChat() {
const {messages, sendMessage} = useChat()
  const api = useApi();
  const { state } = useLocation();
  const [patientName, setPatientName] = useState("Message");

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
    }, 400);
  }, []);

  return (
    <div className={`box ${styles.root}`}>
      {/* <div className="box-header p-0 pt-3 pb-2">
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
      </div> */}
      <div className={styles.chat_list}>
        {messages && messages.map((message, index) => (
          <ChatMessage key={index} data={message} patientclass={false} />
        ))}
        <div className={styles.chat_end} />
      </div>

      <div className={styles.footer}>
        <VideoCallChatInput handleSend={sendMessage} />
      </div>
    </div>
  );
}
export default VideoCallChat;