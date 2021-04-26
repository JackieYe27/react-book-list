import React from 'react';
import Book from './Book';
import books from './books';

const BookList = () => {
    return (
        <div className='bookList'>
            {books.map(book => {
                return (
                    <Book key={book.id} {...book}/>
                )
            })}
        </div>
    )
} 

export default BookList;