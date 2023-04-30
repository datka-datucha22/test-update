import React from "react";
import Header from "./Header";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="parent">
      <Header />
      <h1 style={{ textAlign: "center" }}>Our Contacts</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <a href="https://www.instagram.com/">
          <img
            width="100px"
            src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
            alt="inst"
          />
        </a>
        <a href="https://www.facebook.com/">
          <img
            width="100px"
            src="https://www.facebook.com/images/fb_icon_325x325.png"
            alt="fb"
          />
        </a>
        <a href="https://twitter.com/">
          <img
            width="100px"
            src="https://img.freepik.com/free-icon/twitter_318-674515.jpg"
            alt="twit"
          />
        </a>
      </div>
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23826.049848846502!2d44.7622579433064!3d41.71498944210637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd30294b88b%3A0x9cfe7a9b37f34a36!2z4YOY4YOV4YOQ4YOc4YOUIOGDr-GDkOGDleGDkOGDruGDmOGDqOGDleGDmOGDmuGDmOGDoSDhg6Hhg5Dhg67hg5Thg5rhg53hg5Hhg5jhg6Eg4YOX4YOR4YOY4YOa4YOY4YOh4YOY4YOhIOGDoeGDkOGDruGDlOGDmuGDm-GDrOGDmOGDpOGDnSDhg6Phg5zhg5jhg5Xhg5Thg6Dhg6Hhg5jhg6Lhg5Thg6Lhg5g!5e0!3m2!1ska!2sge!4v1682522649404!5m2!1ska!2sge"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
