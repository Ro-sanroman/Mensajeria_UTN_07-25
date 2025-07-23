import React from "react";
import styles from "./SearchContact.module.css";

const SearchContact = ({ value, onChange, onClear }) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <h2>Chats</h2>
      <button className={styles.headerIcon}>
        <i class="bi bi-pencil-square"></i>
        <i class="bi bi-filter"></i>
      </button>
    </div>
    <div className={styles.wrapper}>
      <button className={styles.icon} onClick={onClear}>
        <i class="bi bi-search"></i>
      </button>
      <input
        type="text"
        className={styles.input}
        placeholder="Buscar un chat o iniciar uno nuevo"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  </div>
);

export default SearchContact;
