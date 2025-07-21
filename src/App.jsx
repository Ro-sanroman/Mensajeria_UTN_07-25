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
              <div className={styles.placeholder}>Seleccioná un contacto</div>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
