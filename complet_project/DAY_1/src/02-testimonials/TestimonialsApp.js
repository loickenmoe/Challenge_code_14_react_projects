import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import "../styles/testimonialsApp.css";

export default function TestimonialsApp() {
  const [testimonials, setTestimonials] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (testimonials === "") return;
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
      });
  }, [testimonials]);
  
  return (
    <div className="container m-auto">
      <Title text={"Testimonials App"} />
      <Button
        text={"posts"}
        btnClass="btn-info"
        icon={<BsFillFileEarmarkPostFill className="" />}
        onClick={() => setTestimonials("Posts")}
      />{" "}
      <Button
        text={"Users"}
        btnClass="btn-info"
        icon={<FaUserAlt />}
        onClick={() => setTestimonials("Users")}
      />
      <Button
        text={"Comments"}
        btnClass="btn-info"
        icon={<BiCommentDetail />}
        onClick={() => setTestimonials("Comments")}
      />
      <Title
        classes={"subtitle text-primary"}
        text={!testimonials ? "Select from above!" : testimonials}
      />
      {!items || items.lenght <= 0
        ? null
        : items.map((item) => {
            return (
              <div className="card card-primary mb-2" key={item.id}>
                {item.name && <h2 className="card-header">{item.name}</h2>}
                <div className="card-body">
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </div>
                {item.email && (
                  <small className="card-footer">{item.email}</small>
                )}
              </div>
            );
          })}
    </div>
  );
}
