// constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function(){
    return `${this.title} by ${this.author}, ${this.pages} pages, ${read ? "already read" : "not read yet"}`
  }
}

const bookData = [
  ["The Hobbit", "J.R.R. Tolkien", 295, false],
  ["Dungeon Crawler Carl #1 - Dungeon Crawler Carl", "Matt Dinniman", 446, true],
  ["Dungeon Crawler Carl #2 - Carl's Doomsday Scenario", "Matt Dinniman", 364, true],
  ["Dungeon Crawler Carl #3 - The Dungeon Anarchist's Cookbook", "Matt Dinniman", 534, true],
  ["Dungeon Crawler Carl #4 - The Gate of the Feral Gods", "Matt Dinniman", 632, true],
  ["Dungeon Crawler Carl #5 - The Butcher's Masquerade", "Matt Dinniman", 726, true],
  ["Dungeon Crawler Carl #6 - The Eye of the Bedlam Bride", "Matt Dinniman", 694, true],
  ["Dungeon Crawler Carl #7 - This Inevitable Ruin", "Matt Dinniman", 724, false],
]

const myLibrary = [];

function addBookToLibrary(book) {
  return myLibrary.push(book);
}

bookData.forEach(e => {
  const book = new Book(e[0], e[1], e[2], e[3]);
  addBookToLibrary(book);
});

const bookshelf = document.querySelector("#bookshelf")

myLibrary.forEach((book, index) => {
  const id = `book-${index + 1}`
  addBookToUI(book, id)
});

function addBookToUI(book, id) {
  const newDiv = document.createElement("div");
  newDiv.id = id;
  newDiv.classList.add("card");
  newDiv.classList.add(book.read ? "read" : "not-read");
  newDiv.innerText = book.info();
  bookshelf.appendChild(newDiv);
}

const addBookButton = document.querySelector("#add-book-button")
const newBookForm = document.querySelector("#new-book-form")

newBookForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(newBookForm);
  const book = new Book(...formData.values());
  addBookToLibrary(book);
  addBookToUI(book, `book-${myLibrary.indexOf(book) + 1}`);
  newBookForm.reset();
})
