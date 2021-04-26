import React from 'react';
import Image from './Img';
import Title from './Title';
import Author from './Author';

const Book = ({img, title, author}) => {
    // attribute, eventHandler
    // onClick, onMouseOver
    const onClickHandler = (author) =>{
        console.log(author);
    }

    return(
        <div className ='book' onMouseOver={() => {
            console.log(title);
        }}>
            <Image img={img}/>
            <Title title={title}/>
            <Author author={author}/>
            <button type="button" onClick={() => onClickHandler(author)}> Button</button>
        </div>
    )
}

export default Book;