import React from "react";
import styles from "./index.module.css";
import clsx from "clsx";
import avatar from '../../assets/images/avatar.jpg'
import ChatLoader from "../ChatLoader";

type Props = {
  data: IncomingMessage | OutgoingMessage;
  patientclass: boolean;
  loading?: boolean;
};

function isIncomingMessage(object: any): object is IncomingMessage {
  return "from" in object;
}

function ChatMessage(props: Props) {
  const { data, patientclass, loading } = props;
  const message = data.message;
  const isIncoming = isIncomingMessage(data);

  const className = clsx({
    [styles.root]: true,
    [isIncoming ? styles.incoming : styles.outgoing]: true,
  });

  const patientClass = clsx({
    [styles.patientRoot]: true,
    [isIncoming ? styles.patientIncoming : styles.patientOutgoing]: true,
  });

  const finalClass = patientclass ? patientClass : className;
  const mainContainerClass = isIncoming ? styles.MessageContainerLeft : styles.MessageContainerRight;

  return (
    <div className={mainContainerClass}>
      <img src={avatar} alt="Dummy image" className={styles.avatar} />
      <div className={finalClass}>
        <div className={styles.messageContent}>
          {
           message
          }
          {
            loading && <ChatLoader/>
          }
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;
