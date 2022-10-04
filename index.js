import Book, {
  booksSection,
  inputTitle,
  inputAuthor,
} from './modules/books.js';
import { navigation } from './modules/navigation.js';
import { DateTime } from './modules/date.js';

const addBtn = document.getElementById('add-btn');

window.onload = Book.displayBooks();
window.onload = navigation();
addBtn.addEventListener('click', () => {
  booksSection.innerHTML = '';
  Book.addBook();
  Book.displayBooks();
  inputTitle.value = '';
  inputAuthor.value = '';
});

// Display date and Time

const timeDate = document.getElementById('date');
const displayDateAndTime = () => {
  const dt = DateTime.now();
  timeDate.textContent = dt
    .setLocale('en-US')
    .toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
};
setInterval(displayDateAndTime, 1000);
