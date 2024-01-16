const BOOK_TITLE = document.querySelector(".book-title");
const BOOK_PAGE_COUNT = document.querySelector(".book-page-count");
const BOOK_READ = document.querySelector(".book-read");
const BOOK_AUTHOR = document.querySelector(".book-author");

const ADD_BUTTON = document.querySelector(".add");
const DIALOG = document.querySelector("dialog");
const SHOW_BUTTON = document.querySelector("dialog + button");
const CLOSE_BUTTON = document.querySelector("dialog button");

const myLibrary = [];

function Book(title, author, pageCount, read) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  this.read = read;
  this.info = function () {
    let information = `${this.title} by ${this.author}, ${this.pageCount} pages`;
    if (read) {
      return `${information}, I've read the book.`;
    } else {
      return `${information}, not read yet.`;
    }
  };
}

function addBookToLibrary(title, author, pageCount, read) {
  const newBook = new Book(title, author, pageCount, read);
  myLibrary.push(newBook);
}

addBookToLibrary("Harry Pottah", "Jk rowling", 300, false);

function loopThroughBooks() {
  for (Book of myLibrary) {
    let hasRead;
    Book.read
      ? (hasRead = "I have read this book")
      : (hasRead = "I haven't read this book");

    BOOK_TITLE.textContent = Book.title;
    BOOK_PAGE_COUNT.textContent = Book.pageCount;
    BOOK_READ.textContent = hasRead;
    BOOK_AUTHOR.textContent = Book.author;
  }
}

SHOW_BUTTON.addEventListener("click", () => {
  DIALOG.showModal();
  ADD_BUTTON.classList.toggle("hidden");
});
CLOSE_BUTTON.addEventListener("click", () => {
  DIALOG.close();
  ADD_BUTTON.classList.toggle("hidden");
});

loopThroughBooks();
