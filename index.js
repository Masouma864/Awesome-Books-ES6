
import Store from "./modules/Store.js";
import UI from "./modules/UI.js";
import Book from "./modules/book.js";
import {DateTime} from "./node_modules/luxon/src/luxon.js"



// EVENT TO DISPLAY BOOKS
document.addEventListener("DOMContentLoaded", UI.displayBooks);
// EVENT TO ADD A BOOK
document.querySelector(".bookForm").addEventListener("submit", (e) => {
  e.preventDefault();
  // get form values
  const titleInput = document.querySelector(".title").value;
  const authorInput = document.querySelector(".author").value;
  const book = new Book(titleInput, authorInput);
  // ADD BOOK TO LIST
  UI.addBookToList(book);
  // ADD BOOK TO STORE
  Store.addBook(book);
  // CLEAR FIELDS
  UI.clearFields();
});
// EVENT DELETE
document.querySelector(".books").addEventListener("click", (e) => {
  if (e.target.className === "btnRemove") {
    const book = e.target.parentElement;
    Store.removeBook(book);
    UI.deleteBook(e.target);
  }
});

// Navigation bar
const navLink = document.getElementsByClassName("navBar__link--item");
[...navLink].forEach((link, index) => {
  link.addEventListener("click", () => {
    // List
    if (index === 0) {
      document.getElementById("store").classList.add("display-block");
      document.getElementById("store").classList.remove("display-none");

      document.getElementById("bookForm").classList.add("display-none");
      document.getElementById("bookForm").classList.remove("display-flex");
      document.getElementById("bookForm").classList.remove("display-block");

      document.getElementById("contact").classList.add("display-none");
      document.getElementById("contact").classList.remove("display-block");
      document.getElementById("contact").classList.remove("display-flex");
    }
    if (index === 1) {
      document.getElementById("store").classList.remove("display-block");
      document.getElementById("store").classList.remove("display-flex");
      document.getElementById("store").classList.add("display-none");

      document.getElementById("bookForm").classList.add("display-flex");
      document.getElementById("bookForm").classList.remove("display-none");

      document.getElementById("contact").classList.add("display-none");
      document.getElementById("contact").classList.remove("display-flex");
      document.getElementById("contact").classList.remove("display-block");
    }
    if (index === 2) {
      document.getElementById("store").classList.add("display-none");
      document.getElementById("store").classList.remove("display-block");
      document.getElementById("store").classList.remove("display-flex");

      document.getElementById("bookForm").classList.add("display-none");
      document.getElementById("bookForm").classList.remove("display-flex");
      document.getElementById("bookForm").classList.remove("display-block");

      document.getElementById("contact").classList.add("display-block");
      document.getElementById("contact").classList.remove("display-none");
    }
  });
});

// Add Time and Date


const theDate = new Date().toUTCString();
const dateDiv = document.querySelector('.time');
dateDiv.innerHTML = theDate;
dateDiv.innerHTML = DateTime.local().toLocaleString(DateTime.DATETIME_FULL);