import React from "react";
import Message from "../Message/Message.jsx";
import styles from "./MessageList.module.css";

const MessageList = ({ messages, deleteMessageById }) => {
  if (messages.length === 0) {
    return <span>No hay mensajes</span>;
  }

  const messages_list = messages.map(function (message) {
    return (
      <Message
        key={message.id}
        speaker={message.speaker}
        hora={message.hora}
        texto={message.texto}
        status={message.status}
        deleteMessageById={deleteMessageById}
        id={message.id}
      />
    );
  });
  return <div className={styles.messageList}>{messages_list}</div>;
};

export default MessageList;
