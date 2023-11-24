document.addEventListener('DOMContentLoaded', function () {
    // Sample book data
    const books = [
        { title: 'Book 1', author: 'Author 1', year: 2020 },
        { title: 'Book 2', author: 'Author 2', year: 2021 },
        { title: 'Book 3', author: 'Author 3', year: 2022 },
    ];

    // Display books
    const bookList = document.getElementById('bookList');

    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `<h2>${book.title}</h2><p>Author: ${book.author}</p><p>Year: ${book.year}</p>`;
        bookList.appendChild(bookElement);
    });
});
