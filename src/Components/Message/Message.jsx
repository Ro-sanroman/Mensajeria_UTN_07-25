import React from "react";
import styles from "../MessageList/MessageList.module.css";

const Message = ({ id, speaker, hora, texto, status, deleteMessageById }) => {
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
    <div className={styles.container}>
      <div className={styles.delteButtonContainer}>
        <button
          className={styles.deleteButton}
          onClick={() => deleteMessageById(id)}
        >
          <i class="bi bi-trash3"></i>
        </button>
      </div>
      <div className={styles.messagesContainer}>
        <div className={styles.textoContainer}>
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
