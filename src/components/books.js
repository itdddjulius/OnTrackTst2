import React from 'react'

    const Books = ({ books }) => {
      return (
        <div>
          <center><h1>Book List</h1></center>
          {books.map((book) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{book.books.book_title}</h5>
                <h6 class="card-author mb-2 text-muted">{book.books.book_author}</h6>
                <p>Published:</p>
                <p class="card-text">{book.books.book_publication_city}</p>
                <p class="card-text">{book.books.book_publication_country}</p>
                <p class="card-text">{book.books.book_publication_year}</p>
                <p>Pages:</p>
                <p class="card-text">{book.books.book_pages}</p>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Books