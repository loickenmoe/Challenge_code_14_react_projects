import React from "react";
import "../../styles/contact.css";

export default function contact({
  contact,
  width = 300,
  cardColor,
  textColor,
}) {
  return (
    <div
      key={contact.id}
      className={`card ${cardColor}`}
      style={{ width: width }}
    >
      <div className="card-header">{contact.first_name}</div>
      <div className="card-body text-left">
        <h4 className="card-text">
          {""}
          <span className={` bold  fw-bold ${textColor}`}>Last Name:</span>
          {contact.last_name}
        </h4>
        <p className="card-text">
          <span className={` bold  fw-bold ${textColor}`}>Email:</span>
          {contact.email}
        </p>
        <p className="card-text">
          <span className={` bold  fw-bold ${textColor}`}>Phone :</span>
          {contact.phone}
        </p>
        <p className="card-text">
          <span className={` bold  fw-bold ${textColor}`}>User name:</span>
          {contact.user_name}
        </p>
      </div>
    </div>
  );
}
