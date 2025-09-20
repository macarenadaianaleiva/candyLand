import React from "react";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  img: string;
  hoverImg: string;
  title: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ img, hoverImg, title }) => {
  return (
    <div className={styles.producto}>
      <div className={styles.imagenHover}>
        <img src={img} alt={title} />
        <img src={hoverImg} alt={`${title} Hover`} className={styles.hoverImg} />
      </div>
      <p>{title}</p>
    </div>
  );
};

export default ProductCard;
