import Store from './Store.js';
export default class UI {
    static displayBooks() {
      const books = Store.getBooks();
      books.forEach((book) => UI.addBookToList(book));
    }
  
    static addBookToList(book) {
      const books = document.querySelector('.books');
      const newBook = document.createElement('div');
      newBook.insertAdjacentHTML('afterbegin', `
    <div class="bookDiv">
      <div class="bookTitleAuthor">
        <h4 id="title">"${book.title}"</h4>
        <p class="by">by</p>
        <h4 id="author">${book.author}</h4>
      </div>
      <button class="btnRemove">Remove</button>
    </div>
          `);
      newBook.classList.add('newBook');
      books.appendChild(newBook);
    }
  
    static deleteBook(el) {
      if (el.classList.contains('btnRemove')) {
        el.parentElement.parentElement.remove();
      }
    }
  
    static clearFields() {
      document.querySelector('.title').value = '';
      document.querySelector('.author').value = '';
    }
  }