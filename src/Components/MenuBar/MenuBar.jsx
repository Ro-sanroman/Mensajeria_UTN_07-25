import React from "react";
import styles from "./MenuBar.module.css";

const MenuBar = () => {
  return (
    <div className={styles.menuBar}>
      <div className={styles.headerMenu}>
        <button className={styles.navegacion}>
          <i class="bi bi-list"></i>
        </button>
        <button className={styles.chats}>
          <i class="bi bi-chat-dots"></i>
        </button>
        <button className={styles.llamadas}>
          <i class="bi bi-telephone"></i>
        </button>
        <button className={styles.estados}>
          <i class="bi bi-nut"></i>
        </button>
      </div>
      <div className={styles.footerMenu}>
        <button className={styles.mensajesDestacados}>
          <i class="bi bi-star"></i>
        </button>
        <button className={styles.chatsArchivados}>
          <i class="bi bi-archive"></i>
        </button>
      </div>
      <div className={styles.footerMenuProfile}>
        <button className={styles.ajustes}>
          <i class="bi bi-gear"></i>
        </button>
        <button className={styles.perfil}>
          <i class="bi bi-person-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default MenuBar;
