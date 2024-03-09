import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('Quote goes here');
  const [author, setAuthor] = useState('Author');

  const getQuote = () => {
    fetch("http://api.quotable.io/random")
      .then(res => res.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  };

  useEffect(() => {
    getQuote();
    const intervalId = setInterval(getQuote, 86400000);
    return() => clearInterval(intervalId);
  }, []);

  return ( 
    <div className="container">
      <div onClick={getQuote} className="quote-box">
        <p id="quote">{quote}</p>
        <small id="author">{author}</small>
      </div>
    </div>
  );
};

export default Quote;
