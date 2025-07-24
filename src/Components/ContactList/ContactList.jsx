import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import { NavLink } from "react-router";

const ContactList = ({ contacts }) => {
  return (
    <div>
      {contacts.map((contact) => (
        <NavLink to={`/contact/${contact.id}/messages`} key={contact.id}>
          <ContactItem contact={contact} />
        </NavLink>
      ))}
    </div>
  );
};

export default ContactList;
