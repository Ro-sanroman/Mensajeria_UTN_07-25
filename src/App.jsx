import React, { useState } from "react";
import ChatScreen from "./Screens/ChatScreen/ChatScreen.jsx";
import { Route, Routes } from "react-router";
import ContactScreen from "./Screens/ContactScreen/ContactScreen.jsx";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.contactContainer}>
        <ContactScreen />
      </div>
      <div className={styles.chatContainer}>
        <Routes>
          <Route
            path="/contact/:contact_id/messages"
            element={<ChatScreen />}
          />
          <Route
            path="/"
            element={
              <div className={styles.placeholder}>
                <i class="bi bi-whatsapp"></i>
                <span className={styles.placeholderTitle}>
                  Whatsapp para Windows
                </span>
                <span className={styles.placeholderSubtitle}>
                  Envía y recibe mensajes sin tener tu teléfono conectado. vez.
                </span>
                <span className={styles.placeholderSubtitle2}>
                  Usa Whatsapp en hasta 4 dispositivos vinculados y 1 teléfono a
                  la vez.
                </span>
                <span className={styles.placeholderFeet}>
                  <i class="bi bi-lock"></i>Cifrado de extremo a extremo
                </span>
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
