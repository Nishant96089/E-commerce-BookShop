import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";
import BookDetails from "./components/BookDetails";
import Footer from "./components/Footer";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState(null);

  useEffect(() => {
    fetch("https://d1krvzwx5oquy1.cloudfront.net/books.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Mainpage searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BookDetails books={books} searchQuery={searchQuery} />
      <Footer />
    </>
  );
}

export default App;
