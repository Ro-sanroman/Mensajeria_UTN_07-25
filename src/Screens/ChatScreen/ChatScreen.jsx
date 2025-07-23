import React from "react";
import { useState, useEffect } from "react";
import MessageList from "../../Components/MessageList/MessageList";
import styles from "../ChatScreen/ChatScreen.module.css";
import { useParams } from "react-router";
import { getContactById } from "../../services/contactServices.js";

const ChatScreen = () => {
  const { contact_id } = useParams();
  const contactSelected = getContactById(contact_id);

  const contact_selected = getContactById(contact_id);
  console.log(contact_selected);

  const [messages, setMessage] = useState(
    contact_selected ? contact_selected.messages : []
  );

  useEffect(() => {
    const contact = getContactById(contact_id);
    if (contact) {
      setMessage(contact.messages);
    } else {
      setMessage([]);
    }
  }, [contact_id]);

  const [mensajeInput, setMensajeInput] = useState("");

  const deleteMessageById = (message_id) => {
    const new_message_list = messages.filter((message) => {
      return message.id !== message_id;
    });
    setMessage(new_message_list);
  };

  const addNewMessage = (text) => {
    const new_message = {
      speaker: "YO",
      hora: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      texto: text,
      status: "no-visto",
      id: messages.length + 1,
    };
    const clone_messaes_list = [...messages];
    clone_messaes_list.push(new_message);
    setMessage(clone_messaes_list);
  };

  const handleSubmitSendMessageForm = (event) => {
    event.preventDefault();
    let new_message_text = event.target.message.value;
    addNewMessage(new_message_text);
    event.target.message.value = "";
  };

  let sendIcon;

  if (mensajeInput.trim() === "") {
    sendIcon = (
      <i
        className="bi bi-mic"
        style={{ fontWeight: "900", color: "#dbd6d6" }}
      ></i>
    );
  } else {
    sendIcon = (
      <i
        className="bi bi-send"
        style={{ fontWeight: "900", color: "#dbd6d6" }}
      ></i>
    );
  }

  return (
    <div className={styles.chatScreen}>
      <div className={styles.chatHeader}>
        <div className={styles.contactInfoContainer}>
          <img
            src={contactSelected.avatar}
            className={styles.avatar}
            alt="Avatar"
          />
          <div className={styles.contactInfo}>
            <h2 className={styles.name}>{contactSelected.name}</h2>
            <h2 className={styles.lastConnection}>
              {contactSelected.last_connection}
            </h2>
          </div>
        </div>
        <div className={styles.iconsContainer}>
          <button className={styles.iconButton}>
            <i class="bi bi-camera-video"></i>
            <i class="bi bi-telephone"></i>
            <i class="bi bi-search"></i>
          </button>
        </div>
      </div>
      <div className={styles.messageListWrapper}>
        <MessageList
          messages={messages}
          deleteMessageById={deleteMessageById}
        />
      </div>

      <form onSubmit={handleSubmitSendMessageForm}>
        <div className={styles.formContainer}>
          <label className={styles.label} htmlFor="message"></label>

          <div className={styles.iconsContainer}>
            <button className={styles.buttonEmoji} type="button">
              <i className="bi bi-emoji-smile"></i>
            </button>
            <button className={styles.buttonClip} type="button">
              <i className="bi bi-paperclip"></i>
            </button>
          </div>

          <input
            className={styles.input}
            id="message"
            type="text"
            name="message"
            placeholder="Mensaje"
            value={mensajeInput}
            onChange={(event) => setMensajeInput(event.target.value)}
          />

          <button className={styles.buttonSendForm} type="submit">
            {sendIcon}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatScreen;
