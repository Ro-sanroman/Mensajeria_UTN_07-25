import React, { Profiler } from "react";
import { useState } from "react";
import ContactList from "../../Components/ContactList/ContactList";
import { getContactList } from "../../services/contactServices.js";

const ContactScreen = () => {
  const contacts = getContactList();
  const [contactsState, setContactsState] = useState(contacts);

  return (
    <div>
      <ContactList contacts={contactsState} />
    </div>
  );
};

export default ContactScreen;
