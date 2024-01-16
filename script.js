const CONSOLE = document.querySelector(".console");
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
addBookToLibrary("Js in 100s", "Fireship", 124, true);
addBookToLibrary("Plants vs Zombies: The Guide", "George Gordon", 56, true);
addBookToLibrary("Top 100 Pictures of 2024", "Aaan Ron", 104, false);
addBookToLibrary("Insane Cool Space Pics", "Vladimir Solovel", 24, false);

function loopThroughBooks() {
  for (Book of myLibrary) {
    let hasRead;
    Book.read
      ? (hasRead = "I have read this book")
      : (hasRead = "I haven't read this book");
    CONSOLE.textContent += `${Book.title} by ${Book.author} has ${Book.pageCount} pages & ${hasRead}`;
  }
}

loopThroughBooks();
