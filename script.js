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
let CURRENT_BOOK;
let openedBook;
const SLIDER = document.querySelector(".switch > input");
const BODY = document.querySelector("body");
const SLIDER_PARA = document.querySelector(".slider.round > p");
const myLibrary = [
  new myBook("Echoes of the Cosmos", "Lila Thornfield", "321", "on", "pink"),
  "empty",
  new myBook("Galactic Rhythms", "Jasper M. Huxley", "415", "off", "purple"),
  "empty",
  new myBook("Stellar Shadows", "Aurora Blackwood", "387", "on", "red"),
  new myBook("Nebula Whispers", "Ian Griffiths", "290", "off", "green"),
  "empty",
  "empty",
  new myBook("Quantum Reverie", "Harriet R. Eldridge", "350", "on", "cyan"),
  new myBook(
    "The Celestial Tapestry",
    "Felix J. Morrow",
    "402",
    "False",
    "blue"
  ),
  "empty",
  new myBook("Orbiting Dreams", "Sophia Hartnett", "468", "on", "purple"),
  "empty",
  "empty",
  new myBook("Void Wanderers", "Marcus P. Yale", "276", "off", "green"),
];

function myBook(title, author, pageCount, read, color) {
  this.title = title;
  this.author = author;
  this.pageCount = pageCount;
  if (read === "on") {
    this.read = "read this book";
  } else {
    this.read = "not read this book yet";
  }
  this.color = color;
}

function addBookToLibrary(title, author, pageCount, read, color) {
  const newBook = new myBook(title, author, pageCount, read, color);
  for (let i = 0; i < myLibrary.length; i++) {
    if (myLibrary[i] === "empty") {
      myLibrary[i] = newBook;
      break;
    }
  }
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
        `title-${Book.title.replace(/\s/g, "")}`,
        `author-${Book.author.replace(/\s/g, "")}`,
        `page-count-${Book.pageCount.replace(/\s/g, "")}`,
        `read-${Book.read.replace(/\s/g, "")}`,
        `${Book.color}-book`
      );

      OUR_NEW_BOOK.setAttribute("src", "./img/book.png");
    }
  }
}

function openBook({ title, author, pageCount, read, color }) {
  openDOMBook(title, author, pageCount, read, color);
  BODY.addEventListener("click", removeOpenBook);
}

function chooseRandomColor() {
  colorArray = ["pink", "purple", "red", "green", "cyan", "blue"];
  randomIndex = Math.floor(Math.random() * 6);
  return colorArray[randomIndex];
}

function removeOpenBook() {
  let allOpenBooks = Array.from(
    document.querySelectorAll(".book.initial-open.transition-open")
  );
  for (openedBook of allOpenBooks) {
    openedBook.classList.toggle("hidden");
    openedBook.classList.toggle("opening-book");
    setTimeout(function () {
      BODY.removeChild(openedBook);
    }, 2000);
  }
}

SLIDER.addEventListener("click", () => {
  if (SLIDER.checked) {
    SLIDER_PARA.textContent = "Open book";
  } else {
    SLIDER_PARA.textContent = "Delete book";
  }
});

ADD_BUTTON.addEventListener("click", () => {
  DIALOG.classList.toggle("hidden");
  ADD_BUTTON.classList.toggle("hidden");
});

CLOSE_BUTTON.addEventListener("click", () => {
  DIALOG.classList.toggle("hidden");
  ADD_BUTTON.classList.toggle("hidden");
});

CREATE_BOOK.addEventListener("click", () => {
  let emptyCounter = 0;
  for (const BOOK of myLibrary) {
    switch (BOOK.title) {
      case BOOK_TITLE_INPUT.value:
        CREATE_BOOK.textContent = "Title already exists";
        setTimeout(function () {
          CREATE_BOOK.textContent = "Create Book";
        }, 3000);
        return;
    }
    if (BOOK === "empty") {
      emptyCounter++;
    }
  }

  if (emptyCounter === 0) {
    CREATE_BOOK.textContent = "You have too many books";
    setTimeout(function () {
      CREATE_BOOK.textContent = "Create Book";
    }, 3000);
    return;
  }

  createNewBook = true;
  createDOMBook(
    BOOK_TITLE_INPUT.value,
    BOOK_AUTHOR_INPUT.value,
    BOOK_PAGE_COUNT_INPUT.value,
    BOOK_READ_INPUT.value,
    chooseRandomColor()
  );
  DIALOG.classList.toggle("hidden");
  DIALOG.classList.toggle("animate-dialog");
  ADD_BUTTON.classList.toggle("hidden");
});

function openDOMBook(title, author, pageCount, read, color) {
  const DOM_BOOK = document.createElement("div");
  BODY.appendChild(DOM_BOOK);
  DOM_BOOK.classList.add("book", "initial-open", `${color}-book`);

  createFirstAndSecondPage(title, author, pageCount, read, DOM_BOOK);

  bookTransitionOpen(DOM_BOOK);

  return DOM_BOOK;
}

function createDOMBook(title, author, pageCount, read, color) {
  const DOM_BOOK = document.createElement("div");
  BODY.appendChild(DOM_BOOK);
  DOM_BOOK.classList.add("book", "initial", `${color}-book`);

  createFirstAndSecondPage(title, author, pageCount, read, DOM_BOOK);

  if (createNewBook) {
    bookTransition(DOM_BOOK, author, pageCount, title, read, color);
  }

  createNewBook = false;
}

function updateSwitchListener() {
  for (const Book of myLibrary) {
    if (Book !== "empty") {
      const thisBook = Book;
      const CURRENT_BOOK = document.querySelector(
        `.title-${Book.title.replace(/\s/g, "")}`
      );
      CURRENT_BOOK.addEventListener("click", function () {
        if (SLIDER.checked) {
          openBook(thisBook);
        } else {
          removeBook(thisBook);
        }
      });
    }
  }
}

function removeBook(thisBook) {
  index = myLibrary.findIndex((book) => book === thisBook);
  myLibrary[index] = "empty";
  updateLibraryDisplay();
  updateSwitchListener();
}

function createFirstAndSecondPage(title, author, pageCount, read, DOM_BOOK) {
  console.log(read);
  const PAGE_ONE = document.createElement("article");
  PAGE_ONE.classList.add("page", "page-one");
  DOM_BOOK.appendChild(PAGE_ONE);

  const PAGE_ONE_TITLE = document.createElement("h1");
  PAGE_ONE_TITLE.classList.add("book-title");
  PAGE_ONE_TITLE.textContent = `Title: ${title}`;
  PAGE_ONE.appendChild(PAGE_ONE_TITLE);

  const PAGE_ONE_CONTENT = document.createElement("p");
  PAGE_ONE_CONTENT.classList.add("book-dummy-content");
  PAGE_ONE_CONTENT.textContent =
    "In the vast expanse of the universe, stars twinkle like cosmic beacons, guiding the way for lost travellers. The universe, a grand tapestry of galaxies and nebulae, whispers ancient secrets to those who listen. Within this endless void, black holes dance in a delicate balance, pulling and distorting the very fabric of space-time. Each planet, a unique jewel, orbits its star in a celestial ballet, painting a picture of harmony and chaos intertwined.";
  PAGE_ONE.appendChild(PAGE_ONE_CONTENT);

  const PAGE_ONE_COUNT = document.createElement("h1");
  PAGE_ONE_COUNT.classList.add("book-page-count");
  PAGE_ONE_COUNT.textContent = `Page: ${pageCount}`;
  PAGE_ONE.appendChild(PAGE_ONE_COUNT);

  const PAGE_TWO = document.createElement("article");
  PAGE_TWO.classList.add("page", "page-two");
  DOM_BOOK.appendChild(PAGE_TWO);

  const PAGE_TWO_READ = document.createElement("h1");
  PAGE_TWO_READ.classList.add("book-read");
  PAGE_TWO_READ.textContent = `I've ${read}`;
  PAGE_TWO.appendChild(PAGE_TWO_READ);

  const PAGE_TWO_CONTENT = document.createElement("p");
  PAGE_TWO_CONTENT.classList.add("book-dummy-content");
  PAGE_TWO_CONTENT.textContent =
    "As we delve deeper into the cosmos, we uncover mysteries that challenge our understanding of existence. The silent hum of the universe resonates with the echoes of billions of years of cosmic evolution. From the fiery birth of stars to the tranquil beauty of nebulae, each chapter of the universe's story is written in the light of distant suns. It's a never-ending journey through a realm where time and space converge, revealing the extraordinary tapestry of the cosmos.";
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

function bookTransition(domBook, author, pageCount, title, read, color) {
  setTimeout(function () {
    domBook.classList.toggle("transition");
  }, 0);
  setTimeout(function () {
    domBook.classList.toggle("transition-two");
    addBookToLibrary(title, author, pageCount, read, color);
    updateLibraryDisplay();
    updateSwitchListener();
  }, 2000);
  setTimeout(function () {
    BODY.removeChild(domBook);
  }, 4000);
}

// Startup
updateLibraryDisplay();
updateSwitchListener();
