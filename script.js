const BOOK_TITLE = document.querySelector(".book-title");
const BOOK_PAGE_COUNT = document.querySelector(".book-page-count");
const BOOK_READ = document.querySelector(".book-read");
const BOOK_AUTHOR = document.querySelector(".book-author");

const ADD_BUTTON = document.querySelector(".add");
const DIALOG = document.querySelector("dialog");
const CLOSE_BUTTON = document.querySelector("dialog button");
const CREATE_BOOK = document.querySelector(".create-book");
let createNewBook;
const CONSOLE = document.querySelector(".console");
const BOOK_TITLE_INPUT = document.querySelector(".book-title-input");
const BOOK_PAGE_COUNT_INPUT = document.querySelector(".book-page-count-input");
const BOOK_READ_INPUT = document.querySelector(".book-read-input");
const BOOK_AUTHOR_INPUT = document.querySelector(".book-author-input");
const OPEN_BUTTON = document.querySelector(".open");
const ROW_ONE = document.querySelector(".shelf-1");
const ROW_TWO = document.querySelector(".shelf-2");
const ROW_THREE = document.querySelector(".shelf-3");
let temporary;
let CURRENT_BOOK;
let openedBook;
const SLIDER = document.querySelector(".switch > input");
const BODY = document.querySelector("body");
const SLIDER_PARA = document.querySelector(".slider.round > p");

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

function myBook(title, author, pageCount, read) {
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
  const newBook = new myBook(title, author, pageCount, read);
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i] === "empty") {
      myLibrary[i] = newBook;
      break;
    }
  }
}

function removeBook() {
  updateLibraryDisplay();
}

function updateLibraryDisplay() {
  const imgsInLibrary = document.querySelectorAll(".shelf>img");
  const imgsInLibraryArray = Array.from(imgsInLibrary);

  for (img of imgsInLibraryArray) {
    img.remove();
  }
  const firstSlice = myLibrary.slice(0, 5);
  const secondSlice = myLibrary.slice(5, 10);
  const thirdSlice = myLibrary.slice(10, 15);
  displayRowBooks(firstSlice, ROW_ONE);
  displayRowBooks(secondSlice, ROW_TWO);
  displayRowBooks(thirdSlice, ROW_THREE);
}

function displayRowBooks(array, row) {
  for (Book of array) {
    if (Book === "empty") {
      const EMPTY_IMG = document.createElement("img");
      row.appendChild(EMPTY_IMG);
    } else {
      const OUR_NEW_BOOK = document.createElement("img");
      row.appendChild(OUR_NEW_BOOK);
      OUR_NEW_BOOK.classList.add(
        `title-${Book.title}`,
        `author-${Book.author}`,
        `page-count-${Book.pageCount}`,
        `read-${Book.read}`
      );

      OUR_NEW_BOOK.setAttribute("src", "./img/book.png");
      let storedBook = Book;
      OUR_NEW_BOOK.addEventListener("click", onBookClick);
    }
  }
}

function onBookClick() {
  console.log("Later, this will delete the book");
}

let temporaryExist;

SLIDER.addEventListener("click", function () {
  if (SLIDER.checked) {
    SLIDER_PARA.textContent = "Open book";
    for (Book of myLibrary) {
      if (Book !== "empty") {
        const someObject = { aProperty: Book };

        let CURRENT_BOOK = document.querySelector(`.title-${Book.title}`);

        CURRENT_BOOK.removeEventListener("click", onBookClick);
        CURRENT_BOOK.addEventListener("click", () => {
          openCurrentBook(someObject.aProperty);
        });
      }
    }
  } else {
    SLIDER_PARA.textContent = "Delete book";
  }
});

function openCurrentBook(currentBook) {
  openBook(currentBook);
  BODY.addEventListener("click", removeOpenBook);
}

function openBook({ title, author, pageCount, read }) {
  openDOMBook(title, author, pageCount, read);
  BODY.addEventListener("click", removeOpenBook);
}

function removeOpenBook() {
  let allOpenBooks = Array.from(
    document.querySelectorAll(".book.initial-open.transition-open")
  );
  for (openedBook of allOpenBooks) {
    BODY.removeChild(openedBook);
  }
}

ADD_BUTTON.addEventListener("click", () => {
  DIALOG.classList.toggle("hidden");
  ADD_BUTTON.classList.toggle("hidden");
});

CLOSE_BUTTON.addEventListener("click", () => {
  DIALOG.classList.toggle("hidden");
  ADD_BUTTON.classList.toggle("hidden");
});

CREATE_BOOK.addEventListener("click", () => {
  createNewBook = true;
  createDOMBook(
    BOOK_TITLE_INPUT.value,
    BOOK_AUTHOR_INPUT.value,
    BOOK_PAGE_COUNT_INPUT.value,
    BOOK_READ_INPUT.value
  );
  DIALOG.classList.toggle("hidden");
  ADD_BUTTON.classList.toggle("hidden");
});

function openDOMBook(title, author, pageCount, read) {
  const DOM_BOOK = document.createElement("div");
  BODY.appendChild(DOM_BOOK);
  DOM_BOOK.classList.add("book", "initial-open");

  createFirstAndSecondPage(title, author, pageCount, read, DOM_BOOK);

  bookTransitionOpen(DOM_BOOK);

  return DOM_BOOK;
}

function createDOMBook(title, author, pageCount, read) {
  const DOM_BOOK = document.createElement("div");
  BODY.appendChild(DOM_BOOK);
  DOM_BOOK.classList.add("book", "initial");

  createFirstAndSecondPage(title, author, pageCount, read, DOM_BOOK);

  if (createNewBook) {
    bookTransition(DOM_BOOK, author, pageCount, title, read);
  }

  createNewBook = false;
  // DOM_BOOK.classList.toggle("transition");
}

function createFirstAndSecondPage(title, author, pageCount, read, DOM_BOOK) {
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
}

function bookTransitionOpen(domBook) {
  setTimeout(function () {
    domBook.classList.toggle("transition-open");
  }, 0);
}

function bookTransition(domBook, author, pageCount, title, read) {
  setTimeout(function () {
    domBook.classList.toggle("transition");
  }, 0);
  setTimeout(function () {
    domBook.classList.toggle("transition-two");
    addBookToLibrary(title, author, pageCount, read);
    updateLibraryDisplay();
  }, 2000);
  setTimeout(function () {
    BODY.removeChild(domBook);
  }, 4000);
}
