import React from "react";
import { useState } from "react";
import MessageList from "../../Components/MessageList/MessageList";
import styles from "../../Components/MessageList/MessageList.module.css";
import { useParams } from "react-router";
import { getContactById } from "../../services/contactServices.js";

const ChatScreen = () => {
  const { contact_id } = useParams();

  const contact_selected = getContactById(contact_id);
  console.log(contact_selected);

  const [messages, setMessage] = useState(contact_selected.messages);

  const [mensajeInput, setMensajeInput] = useState("");

  const deleteMessageById = (message_id) => {
    const new_message_list = messages.filter((message) => {
      return message.id !== message_id;
    });
    setMessage(new_message_list);
  };

  const deleteAllMessages = () => {
    setMessage([]);
  };
  /* Practica:
  darkMode
  resetMessages
   */

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
    <div>
      {messages.length > 0 && (
        <button
          onClick={() => deleteAllMessages()}
          className={styles.buttonDeleteAll}
        >
          Borrar todos los mensajes
        </button>
      )}
      <button
        onClick={() => deleteMessageById(1)}
        className={styles.buttonDeleteFirst}
      >
        Eliminar el primer mensaje
      </button>
      <MessageList messages={messages} deleteMessageById={deleteMessageById} />
      <form onSubmit={handleSubmitSendMessageForm}>
        <div className={styles.formContainer}>
          <label className={styles.label} htmlFor="message">
            {" "}
          </label>
          <div className={styles.iconsContainer}>
            <button className={styles.buttonEmoji} type="button">
              <i class="bi bi-emoji-smile"></i>
            </button>
            <button className={styles.buttonClip} type="button">
              <i class="bi bi-paperclip"></i>
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
