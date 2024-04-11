import React from "react";
import styles from "../styles/Mainpage.module.css";
import BookshopImg from "../assets/bookshop.gif";

const Mainpage = ({ searchQuery, setSearchQuery }) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <img
          src={BookshopImg}
          alt="Header GIF"
          className={styles.bookshopImg}
        />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.rightText}>
          <h1 className={styles.heroText}>
            Discover Your Next Favourite Book Here.
          </h1>
          <p className={styles.heroPara}>
            Explore our curated collection of new and popular books to find your
            next library adevnture.
          </p>
          <input
            type="text"
            className={styles.searchBar}
            placeholder="Which book are you Looking For ?"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
