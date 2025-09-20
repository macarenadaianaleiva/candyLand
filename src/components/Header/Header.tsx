import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <img src="/src/assets/img/logo.png" alt="Candy Land" className={styles.logoNav} />

      <button className={styles.hamburger} onClick={() => setOpen(!open)}>
        ☰
      </button>

      <ul className={`${styles.navLinks} ${open ? styles.active : ""}`}>
        <li><a href="#dulces">NUESTROS DULCES</a></li>
        <li><a href="#tutoriales">TUTORIALES</a></li>
        <li><a href="#menu">NUESTRO MENÚ</a></li>
        <li><a href="#trabaja">TRABAJÁ CON NOSOTROS</a></li>
        <li><a href="#franquicias">FRANQUICIAS</a></li>
        <li><a href="#contacto">CONTACTO</a></li>
      </ul>
    </header>
  );
};

export default Header;
