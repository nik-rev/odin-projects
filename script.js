const BOOK_TITLE = document.querySelector(".book-title");
const BOOK_PAGE_COUNT = document.querySelector(".book-page-count");
const BOOK_READ = document.querySelector(".book-read");
const BOOK_AUTHOR = document.querySelector(".book-author");

const ADD_BUTTON = document.querySelector(".add");
const DIALOG = document.querySelector("dialog");
const SHOW_BUTTON = document.querySelector("dialog + button");
const CLOSE_BUTTON = document.querySelector("dialog button");
const CREATE_BOOK = document.querySelector(".create-book");

const CONSOLE = document.querySelector(".console");
const BOOK_TITLE_INPUT = document.querySelector(".book-title-input");
const BOOK_PAGE_COUNT_INPUT = document.querySelector(".book-page-count-input");
const BOOK_READ_INPUT = document.querySelector(".book-read-input");
const BOOK_AUTHOR_INPUT = document.querySelector(".book-author-input");

const ROW_ONE = document.querySelector(".shelf-1");
const ROW_TWO = document.querySelector(".shelf-2");
const ROW_THREE = document.querySelector(".shelf-3");

const BODY = document.querySelector("body");
const myLibrary = [
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
  "empty",
];

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
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i] === "empty") {
      myLibrary[i] = newBook;
      break;
    }
  }
}

function displayLibraryBooks(array) {
  for (book of array) {
    if (book === "empty") {
      const EMPTY_IMG = document.createElement("img");
    }
  }
}

// function loopThroughBooks() {
//   for (Book of myLibrary) {
//     let hasRead;
//     Book.read
//       ? (hasRead = "I have read this book")
//       : (hasRead = "I haven't read this book");

//     BOOK_TITLE.textContent = Book.title;
//     BOOK_PAGE_COUNT.textContent = Book.pageCount;
//     BOOK_READ.textContent = hasRead;
//     BOOK_AUTHOR.textContent = Book.author;
//   }
// }

SHOW_BUTTON.addEventListener("click", () => {
  DIALOG.classList.toggle("hidden");
  ADD_BUTTON.classList.toggle("hidden");
});
CLOSE_BUTTON.addEventListener("click", () => {
  DIALOG.classList.toggle("hidden");
  ADD_BUTTON.classList.toggle("hidden");
});
CREATE_BOOK.addEventListener("click", () => {
  createDOMBook(
    BOOK_TITLE_INPUT.value,
    BOOK_AUTHOR_INPUT.value,
    BOOK_PAGE_COUNT_INPUT.value,
    BOOK_READ_INPUT.value
  );
  DIALOG.classList.toggle("hidden");
  ADD_BUTTON.classList.toggle("hidden");
});

function createDOMBook(title, author, pageCount, read) {
  const DOM_BOOK = document.createElement("div");
  BODY.appendChild(DOM_BOOK);
  DOM_BOOK.classList.add("book", "initial");

  // Creating first page
  const PAGE_ONE = document.createElement("article");
  PAGE_ONE.classList.add("page", "page-one");
  DOM_BOOK.appendChild(PAGE_ONE);

  const PAGE_ONE_TITLE = document.createElement("h1");
  PAGE_ONE_TITLE.classList.add("book-title");
  PAGE_ONE_TITLE.textContent = `Title: ${title}`;
  PAGE_ONE.appendChild(PAGE_ONE_TITLE);

  const PAGE_ONE_CONTENT = document.createElement("p");
  PAGE_ONE_CONTENT.classList.add("book-dummy-content");
  PAGE_ONE_CONTENT.textContent = "test dummy content";
  PAGE_ONE.appendChild(PAGE_ONE_CONTENT);

  const PAGE_ONE_COUNT = document.createElement("h1");
  PAGE_ONE_COUNT.classList.add("book-page-count");
  PAGE_ONE_COUNT.textContent = `Page: ${pageCount}`;
  PAGE_ONE.appendChild(PAGE_ONE_COUNT);

  // Creating second page
  const PAGE_TWO = document.createElement("article");
  PAGE_TWO.classList.add("page", "page-two");
  DOM_BOOK.appendChild(PAGE_TWO);

  const PAGE_TWO_READ = document.createElement("h1");
  PAGE_TWO_READ.classList.add("book-read");
  PAGE_TWO_READ.textContent = `I've ${read} it`;
  PAGE_TWO.appendChild(PAGE_TWO_READ);

  const PAGE_TWO_CONTENT = document.createElement("p");
  PAGE_TWO_CONTENT.classList.add("book-dummy-content");
  PAGE_TWO_CONTENT.textContent = "test dummy content again";
  PAGE_TWO.appendChild(PAGE_TWO_CONTENT);

  const PAGE_TWO_AUTHOR = document.createElement("h1");
  PAGE_TWO_AUTHOR.classList.add("book-author");
  PAGE_TWO_AUTHOR.textContent = `Author: ${author}`;
  PAGE_TWO.appendChild(PAGE_TWO_AUTHOR);

  // DOM_BOOK.classList.toggle("transition");
  setTimeout(function () {
    DOM_BOOK.classList.toggle("transition");
  }, 0);
  setTimeout(function () {
    DOM_BOOK.classList.toggle("transition-two");
    addBookToLibrary(title, author, pageCount, read);
    console.log(myLibrary);
  }, 2000);
}
