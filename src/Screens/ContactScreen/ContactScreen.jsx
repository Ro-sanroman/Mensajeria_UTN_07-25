import React from "react";
import ContactList from "../../Components/ContactList/ContactList";
import { getContactList } from "../../services/contactServices";

const ContactScreen = () => {
  const contacts = getContactList();

  return (
    <div>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactScreen;
