export default class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(book) {
    const bookTitle = book.querySelector('#title').innerText;
    const books = Store.getBooks();
    const filt = books.filter((book) => bookTitle === book.title);
    const filtIndex = books.indexOf(filt[0]);
    books.splice(filtIndex, 1);
    localStorage.setItem('books', JSON.stringify(books));
  }
}
