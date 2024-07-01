import styles from "./index.module.css";
import ChatInput from "../ChatInput";
import ChatMessage from "../ChatMessage";

import useChatBot from "../../hooks/useChatBot";
import { useApp } from "../../providers/AppProvider";

function ChatBot() {
  const { messages, setMessage, chatLoading } = useChatBot();

  const { eventId } = useApp();

  return (
    <div className={`box ${styles.root}`}>
      <div className={styles.chat_list}>

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
        {messages && messages.map((message, index) => (
          <ChatMessage key={index} data={message} isBot={true} />
        ))}
        {
          chatLoading && <ChatMessage data={{ privateMessage: false, message: "" }} isBot={true} loading={chatLoading} />
        }
        <div className={styles.chat_end} />
      </div>
      <div className={styles.footer}>
      <div className="p-1 fs-6">
        &copy; {new Date().getFullYear()} <a href="#">Infinity Clinic</a>. All Rights Reserved.
      </div>
      <div className={styles.chatInput}>
      <ChatInput handleSend={setMessage} eventId={eventId} />
      </div>
      </div>
    </div>
  );
}
export default ChatBot;