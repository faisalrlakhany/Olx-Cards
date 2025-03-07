import React from "react";
import Btn from './Btn' ;
import './card.css' 

const Card = (props) => {
  const styles = {
    card: {
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "0px",
        textAlign: "center",
        width: "300px", // Fixed width to ensure consistency
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      },
      image: {
        width: "100%",
        height: "200px", // Fixed height to maintain uniformity
        objectFit: "cover", // Ensures the image fills the space properly
        borderRadius: "0px",
        display: "block",
        margin: "0",
      },
    name: {
      fontSize: "20px",
      fontWeight: "bold",
      margin: "10px 0",
    },
    price: {
      color: "#28a745",
      fontSize: "18px",
      fontWeight: "bold",
    },
    description: {
      fontSize: "14px",
      color: "#555",
      margin: "10px 0",
    }
  };

  return (
    <>
        <div style={styles.card} className="cards">
            <img style={styles.image} src={props.image} alt="Product" className="image"  />
            <div style={styles.name}>{props.name}</div>
            <div style={styles.price}>{props.price}</div>
            <div style={styles.description}>{props.desc}</div>
            <Btn title="Buy Now"/>
        </div>
    </>
  );
};

export default Card;
