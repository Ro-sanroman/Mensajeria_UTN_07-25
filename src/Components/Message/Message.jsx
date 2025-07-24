import React from "react";
import styles from "../Message/Message.module.css";

const Message = ({ id, speaker, hora, texto, status, deleteMessageById }) => {
  console.log("speaker", speaker);
  const isMine = speaker === "YO";
  const getStatusIcon = () => {
    if (status === "no-visto") {
      return (
        <i
          className="bi bi-check2-all"
          style={{ color: "#747d84", fontSize: "20px" }}
        ></i>
      );
    } else if (status === "visto") {
      return (
        <i
          className="bi bi-check2-all"
          style={{ color: "#08a0ff", fontSize: "15px" }}
        ></i>
      );
    } else {
      return null;
    }
  };

  return (
    <div className={styles.messagesContainer}>
      <div
        className={`${styles.message} ${
          isMine ? styles.messageRight : styles.messageLeft
        }`}
      >
        <div>
          <h2 className={styles.texto}>{texto}</h2>
          <div className={styles.extraContainer}>
            <span className={styles.time}>{hora}</span>
            <span className={styles.status}>{getStatusIcon()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
