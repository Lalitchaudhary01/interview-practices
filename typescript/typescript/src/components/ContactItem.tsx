import React from "react";
import type { Contact } from "../types/contact";

type ContactItemProps = {
  contact: Contact;
  onRemove: (id: number) => void;
};

export default function ContactItem({ contact, onRemove }: ContactItemProps) {
  return (
    <div className="contact-item">
      <span>
        {contact.name} - {contact.phone}
      </span>
      <button onClick={() => onRemove(contact.id)} className="remove-button">
        Remove
      </button>
    </div>
  );
}
