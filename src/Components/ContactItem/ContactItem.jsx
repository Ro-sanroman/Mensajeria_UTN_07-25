import React from "react";
import { Link } from "react-router";
import styles from "../ContactItem/ContactItem.module.css";

const ContactItem = ({ contact }) => {
  return (
    <Link to={`/contact/${contact.id}/messages`}>
      <div className={styles.contactItem}>
        <img className={styles.avatar} src={contact.avatar} />
        <h2 className={styles.contactName}>{contact.name}</h2>
        <span className={styles.contactConection}>{contact.conection}</span>
      </div>
    </Link>
  );
};

export default ContactItem;
