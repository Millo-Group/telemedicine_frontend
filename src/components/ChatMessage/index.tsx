import React from "react";
import styles from "./index.module.css";
import clsx from "clsx";
import avatar from '../../assets/images/avatar.jpg'
import ChatLoader from "../ChatLoader";

type Props = {
  data: IncomingMessage | OutgoingMessage;
  isBot: boolean;
  loading?: boolean;
};

function isIncomingMessage(object: any): object is IncomingMessage {
  return "from" in object;
}

function ChatMessage(props: Props) {
  const { data, isBot, loading } = props;
  const message = data.message;
  const isIncoming = isIncomingMessage(data);

  const className = clsx({
    [styles.root]: true,
    [isIncoming ? styles.incoming : styles.outgoing]: true,
  });

  const boatClasses = clsx({
    [styles.patientRoot]: true,
    [isIncoming ? styles.patientIncoming : styles.patientOutgoing]: true,
  });

  const finalClass = isBot ? boatClasses : className;
  const mainContainerClass = isIncoming ? styles.MessageContainerLeft : styles.MessageContainerRight;

  return (
    <div className={mainContainerClass}>
      {isBot && <img src={avatar} alt="User" className={styles.avatar} />}
      <div className={finalClass}>
        <div className={styles.messageContent}>
          {
            message
          }
          {
            loading && <ChatLoader />
          }
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
