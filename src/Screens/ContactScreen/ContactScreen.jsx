import React from "react";
import ContactList from "../../Components/ContactList/ContactList";
import { getContactList } from "../../services/contactServices";
import { useState, useEffect } from "react";
import SearchContact from "../../Components/SearchContact/SearchContact";
import styles from "./ContactScreen.module.css";

const ContactScreen = () => {
  const [searchText, setSearchText] = useState("");
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const list = getContactList();
    setContacts(list);
  }, []);

  const filtered = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleClear = () => setSearchText("");

  return (
    <div className={styles.container}>
      <SearchContact
        value={searchText}
        onChange={setSearchText}
        onClear={handleClear}
      />
      <ContactList contacts={filtered} />
    </div>
  );
};

export default ContactScreen;
