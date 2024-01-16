const CONSOLE = document.querySelector(".console");
CONSOLE.textContent = "test";

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

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
CONSOLE.textContent = theHobbit.info();
