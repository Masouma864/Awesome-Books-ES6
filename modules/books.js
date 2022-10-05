export const booksList = JSON.parse(localStorage.getItem('coward')) || [];

export const inputTitle = document.getElementById('title');
export const inputAuthor = document.getElementById('author');
const errorMesg = document.querySelector('.error-mesg');
export const booksSection = document.getElementById('books-list');

export default class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // displaybooks
  static displayBooks = () => {
    booksList.forEach((book) => {
      booksSection.innerHTML += `<div class="book-detail" id="book-detail">
        <div class="one-book">
            <span class="book-title">"${
              book.title.charAt(0).toUpperCase() + book.title.substr(1)
            }"</span>
            <span>by</span>
            <span class="book-author">${book.author}</span>
        </div>
            <button type="button" class="remove-btn" id="remove-btn">Remove</button>
        </div>`;
    });
    const btnRemove = document.querySelectorAll('.remove-btn');
    btnRemove.forEach((btn, i) => {
      btn.addEventListener('click', () => {
        Books.removeBook(i);
      });
    });
    // Books.timeDisplay();
  };

  // addbook
  static addBook = () => {
    const book = new Books(inputTitle.value, inputAuthor.value);
    if (inputTitle.value !== '' && inputAuthor.value !== '') {
      booksList.push(book);
      localStorage.setItem('coward', JSON.stringify(booksList));
      errorMesg.classList.remove('active');
    } else {
      errorMesg.classList.add('active');
    }
  };

  // removebook
  static removeBook = (index) => {
    booksList.splice(index, 1);
    booksSection.innerHTML = '';
    localStorage.setItem('coward', JSON.stringify(booksList));
    Books.displayBooks();
  };
}
