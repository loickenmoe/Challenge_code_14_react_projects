import React, { useRef, useEffect, useState } from "react";
import ContactData from "./Data.json";
import Contact from "./Contact";

function FilterContactApp() {
  let inputSearch = useRef(null);
  useEffect(() => {
    inputSearch.current.focus();
  });

  const [searchContact, setSearchContact] = useState("");

  return (
    <div>
      <h1>Filter Contacts App</h1>
      <input
        type="text"
        placeholder="Search by first name"
        style={{ padding: "0.3rem 0.5rem", margin: "1rem  0 3rem 0", outline:"none" }}
        ref={inputSearch}
        onChange={(e) => setSearchContact(e.target.value)}
      />
      <section
        className="d-flex"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          maxWidth: "1600px",
          margin: "auto",
        }}
      >
        {ContactData.filter((contact) => {
          if (searchContact === "") {
            return contact;
          } else if (
            contact.first_name
              .toLocaleLowerCase()
              .includes(searchContact.toLocaleLowerCase())
          ) {
            return contact;
          }
          }).map((contact) => (
            <Contact
              contact={contact}
              cardColor={"card-danger"}
              textColor={"text-dark"}
            />
          ))
        }
      </section>
    </div>
  );
}

export default FilterContactApp;
