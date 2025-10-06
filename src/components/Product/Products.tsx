import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Products.module.css";

import g1 from "../../assets/img/golosina1.jpg";
import g1h from "../../assets/img/golosina1-hover.png";
import g2 from "../../assets/img/golosina2.jpg";
import g3 from "../../assets/img/golosina3.jpg";
import g4 from "../../assets/img/golosina4.jpg";
import g5 from "../../assets/img/golosina5.jpg";
import g6 from "../../assets/img/golosina6.jpg";

const Products = () => {
  const productos = [
    { img: g1, hoverImg: g1h, title: "Caramelos Frutales" },
    { img: g2, hoverImg: g1h, title: "Gomitas Ácidas" },
    { img: g3, hoverImg: g1h, title: "Chocolate Relleno" },
    { img: g4, hoverImg: g1h, title: "Paletas Multisabor" },
    { img: g5, hoverImg: g1h, title: "Bombones" },
    { img: g6, hoverImg: g1h, title: "Galletitas Dulces" },
  ];

  return (
    <section className={styles.productosCandy}>
      <h2 className={styles.tituloProductos}>NUESTROS DULCES DELICIOSOS</h2>
      <div className={styles.productosFlex}>
        {productos.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Products;
