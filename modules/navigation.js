const sectionOfBooks = document.querySelector('#books-section');
const sectionContact = document.querySelector('#section-contact');
const sectionForm = document.querySelector('#form-section');
const links = document.querySelectorAll('.nav-links');

// navigation

export const navigation = () => {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      if (e.target.id === 'list') {
        sectionOfBooks.classList.add('showing');
        sectionContact.classList.remove('showing');
        sectionForm.classList.remove('showing');
      } else if (e.target.id === 'add') {
        sectionOfBooks.classList.remove('showing');
        sectionContact.classList.remove('showing');
        sectionForm.classList.add('showing');
      } else if (e.target.id === 'contact') {
        sectionOfBooks.classList.remove('showing');
        sectionContact.classList.add('showing');
        sectionForm.classList.remove('showing');
      }
    });
  });
};

export default { navigation };
