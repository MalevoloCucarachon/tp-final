import React, { useState, useEffect } from 'react';
import './Testimony.css'
import peopleData from '../../../resources/comments.json'
import CommentCard from './CommentCard';
const Testimony = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (peopleData.people && peopleData.people.length > 0) {
      const allPeople = peopleData.people.map((c, index) => (
        <CommentCard
          key={index}
          comment={c.comment}
          name={c.name}
          surname={c.surname}
          profession={c.profession}
        />
      ));
      setPeople(allPeople);
    }
  }, []);

  useEffect(() => {
    // Esta función se ejecutará cada 10 segundos
    const intervalId = setInterval(() => {
      Slide();
    }, 10000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
    

  }, [currentIndex]);
 
  const Slide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === people.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const updatedCards = [];

    for (let i = 0; i < 3; i++) {
      const cardIndex = (currentIndex + i) % people.length;
      updatedCards.push(people[cardIndex]);
    }

    setCards(updatedCards);
  }, [currentIndex, people]);

  return (
    <>
      <section className="carousel" style={{}}>
        {cards}
      </section>
    </>
  );
};

export default Testimony