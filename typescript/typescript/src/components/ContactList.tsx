import React, { useState } from "react";
import type { Contact } from "../types/contact";
import ContactItem from "./ContactItem";

export default function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const addContact = () => {
    if (!name.trim() || !phone.trim()) return;
    const newContact: Contact = { id: Date.now(), name, phone };
    setContacts([...contacts, newContact]);
    setName("");
    setPhone("");
  };

  const removeContact = (id: number) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div>
      <h2>📇 Contact List</h2>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={addContact}>Add</button>

      <ul>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onRemove={removeContact}
          />
        ))}
      </ul>
    </div>
  );
}
