import React from "react";
import styles from "../styles/BookModal.module.css";

const Modal = ({ book, onClose }) => {
  return (
    <div className={styles.modal}>
      <center>
        <div className={styles.modalContent}>
          <span className={styles.close} onClick={onClose}>
            &times;
          </span>
          <h2>{book.volumeInfo.title}</h2>
          <p style={{ color: "red", fontSize: "30px" }}>
            Description:{" "}
            <p className={styles.desc}>{book.volumeInfo.description}</p>
          </p>
          <p style={{ color: "red", fontSize: "30px" }}>
            Author:{" "}
            <p className={styles.desc}>{book.volumeInfo.authors.join(", ")}</p>
          </p>
          <p style={{ color: "red", fontSize: "30px" }}>
            Pages: <p className={styles.desc}>{book.volumeInfo.pageCount}</p>
          </p>
          <p style={{ color: "red", fontSize: "30px" }}>
            Publisher:{" "}
            <p className={styles.desc}>{book.volumeInfo.publisher}</p>
          </p>
          <p style={{ color: "red", fontSize: "30px" }}>
            Published Date:{" "}
            <p className={styles.desc}>{book.volumeInfo.publishedDate}</p>
          </p>
          <p style={{ color: "red", fontSize: "30px" }}>
            Category:{" "}
            <p className={styles.desc}>
              {book.volumeInfo.categories.join(", ")}
            </p>
          </p>
          <p style={{ color: "red", fontSize: "30px" }}>
            Language: <p className={styles.desc}>{book.volumeInfo.language}</p>
          </p>
        </div>
      </center>
    </div>
  );
};

export default Modal;
