import { useEffect, useState } from "react";
import styles from "./index.module.css";
import ChatInput from "../ChatInput";
import ChatMessage from "../ChatMessage";

import {useApi} from "../../hooks/useApi";
import { useLocation } from "react-router-dom";
import useChatBot from "../../hooks/useChatBot";

function Chat() {
  const { messages, setMessage, loading: chatLoading } = useChatBot();
  // const messages: Array<IncomingMessage | OutgoingMessage> = [
  //   {
  //     message: "Hello everyone!",
  //     privateMessage: false,
  //     from: "alice@example.com",
  //     nick: "Alice"
  //   },
  //   {
  //     message: "Hi Alice! How are you?",
  //     privateMessage: false
  //   },
  //   {
  //     message: "I'm doing well, thanks for asking!",
  //     privateMessage: false,
  //     from: "alice@example.com",
  //     nick: "Alice"
  //   },
  //   {
  //     message: "Can you please check your email?",
  //     privateMessage: true,
  //     from: "bob@example.com",
  //     nick: "Bob"
  //   },
  //   {
  //     message: "Sure, I'll check it right away.",
  //     privateMessage: true
  //   },
  //   {
  //     message: "Meeting at 10 AM tomorrow.",
  //     privateMessage: false,
  //     from: "manager@example.com",
  //     nick: "Manager"
  //   },
  //   {
  //     message: "Got it, thanks for the update.",
  //     privateMessage: false
  //   },
  //   {
  //     message: "Don't forget to submit your report by EOD.",
  //     privateMessage: true,
  //     from: "manager@example.com",
  //     nick: "Manager"
  //   },
  //   {
  //     message: "Noted, I'll make sure it's done.",
  //     privateMessage: true
  //   },
  //   {
  //     message: "Hey, are we still on for lunch today?",
  //     privateMessage: false,
  //     from: "charlie@example.com",
  //     nick: "Charlie"
  //   },
  //   {
  //     message: "Yes, see you at noon!",
  //     privateMessage: false
  //   },
  //   {
  //     message: "Can you send me the project files?",
  //     privateMessage: true,
  //     from: "dave@example.com",
  //     nick: "Dave"
  //   },
  //   {
  //     message: "Sure, sending them now.",
  //     privateMessage: true
  //   }
  // ];

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
        <div className={styles.row}>
          <div>
            <h6>Message</h6>
          </div>
          <div>
            <div className={styles.pullRight}>

              <span className="badge badge-pill badge-info">Archive</span>

            </div>
          </div>
        </div>

        <div className={styles.chat_end} />
      </div>
      <div className="p-1 fs-6">
        &copy; <script>document.write(new Date().getFullYear())</script> <a href="#">Infinity Clinic</a>. All Rights Reserved.
      </div>
      <div className={styles.footer}>

        <ChatInput handleSend={setMessage} loading={chatLoading} />
      </div>
    </div>
  );
}
export default Chat;