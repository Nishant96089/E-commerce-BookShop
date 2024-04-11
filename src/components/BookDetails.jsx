import React, { useState } from "react";
import styles from "../styles/BookDetails.module.css";
import Modal from "./BookModal";
import { FaCartFlatbed } from "react-icons/fa6";

const BookDetails = ({ books, searchQuery }) => {
  const [selectedBook, setSelectedBook] = useState(null);

  const handleBookClick = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  const filteredBooks = books
    ? books.filter((book) =>
        book.volumeInfo.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <>
      <center>
        <h1 className={styles.bookHeading}>
          DISCOVER <span>BOOKS</span>
        </h1>
      </center>
      <div className={styles.bookContainer}>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((item) => (
            <div
              key={item.id}
              className={`${styles.book} shadow p-3 mb-5 bg-white rounded`}
            >
              <div
                className={styles.bookImg}
                onClick={() => handleBookClick(item)}
              >
                {item.volumeInfo.imageLinks &&
                  item.volumeInfo.imageLinks.thumbnail &&
                  item.volumeInfo.imageLinks.smallThumbnail && (
                    <img
                      src={item.volumeInfo.imageLinks.thumbnail}
                      alt="Book Cover"
                    />
                  )}
              </div>
              <div
                className={styles.bookData}
                onClick={() => handleBookClick(item)}
              >
                <center>
                  <h6>{item.volumeInfo.title}</h6>
                  {item.saleInfo.retailPrice ? (
                    <h6 className={styles.price}>
                      {item.saleInfo.retailPrice.amount}{" "}
                      {item.saleInfo.retailPrice.currencyCode}
                    </h6>
                  ) : (
                    <h6 className={styles.price}>
                      {item.saleInfo.saleability}
                    </h6>
                  )}
                </center>
              </div>
              <button
                tabindex="0"
                type="button"
                className={styles.cartBtn}
                onClick={() => addToCart(item)}
              >
                <span>
                  <FaCartFlatbed />
                </span>
              </button>
            </div>
          ))
        ) : (
          <p className={styles.noBook}>
            No books found <span style={{ color: "red" }}>!</span>
          </p>
        )}
        {selectedBook && (
          <Modal book={selectedBook} onClose={handleCloseModal} />
        )}
      </div>
    </>
  );
};

export default BookDetails;
