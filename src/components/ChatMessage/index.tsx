import React from "react";
import styles from "./index.module.css";
import clsx from "clsx";

type Props = {
  data: IncomingMessage | OutgoingMessage;
  patientclass:Boolean
};

function isIncomingMessage(object: any): object is IncomingMessage {
  return "from" in object;
}

function ChatMessage(props: Props) {
  const { data } = props;

  const message = data.message;

  const isIncoming = isIncomingMessage(data);

  const className = clsx({
    [styles.root]: true,
    [isIncoming ? styles.incoming : styles.outgoing]: true,
  });
  const patientclass = clsx({
    [styles.patientRoot]: true,
    [isIncoming ? styles.patientIncoming : styles.patientOutgoing]: true,
  });
  const finalClass= props.patientclass? patientclass: className

  return (
    <div className={finalClass}>
      <div>{message}</div>
    </div>
  );
}

export default ChatMessage;
