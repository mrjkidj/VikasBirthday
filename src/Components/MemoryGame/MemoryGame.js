import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../../Assets/img/photoVika1.jpg';
import image2 from '../../Assets/img/photoVika2.jpg';
import image3 from '../../Assets/img/photoVika3.jpg';
import image4 from '../../Assets/img/photoVika4.jpg';
import image5 from '../../Assets/img/photoVika5.jpg';
import image6 from '../../Assets/img/photoVika6.jpg';
import image7 from '../../Assets/img/photoVika7.jpg';
import image8 from '../../Assets/img/photoVika8.jpg';
import image9 from '../../Assets/img/photoVika9.jpg';
import image10 from '../../Assets/img/photoVika10.jpg';
import image11 from '../../Assets/img/photoVika11.jpg';
import image12 from '../../Assets/img/photoVika12.jpg';
import image13 from '../../Assets/img/photoVika13.jpg';
import image14 from '../../Assets/img/photoVika14.jpg';
import cardBack from '../../Assets/img/photoBack.jpg';
import styles from './MemoryGame.module.css';

const cardImages = [
  { id: 1, src: image1 },
  { id: 2, src: image2 },
  // { id: 3, src: image3 },
  // { id: 4, src: image4 },
  // { id: 5, src: image5 },
  // { id: 6, src: image6 },
  // { id: 7, src: image1 },
  // { id: 8, src: image2 },
  // { id: 9, src: image3 },
  // { id: 10, src: image4 },
  // { id: 11, src: image5 },
  // { id: 12, src: image6 },
  // { id: 13, src: image1 },
  // { id: 14, src: image2 },
  // { id: 15, src: image3 },
  // { id: 16, src: image4 },
  // { id: 17, src: image5 },
  // { id: 18, src: image6 },
];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, flipped: false, uniqueId: index }));

    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      setMoves(prevMoves => prevMoves + 1);
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.src === secondCard.src) {
        setMatchedCards(prevMatchedCards => [...prevMatchedCards, firstCard.id]);
        setFlippedCards([]);
      } else {
        setTimeout(() => {
          setCards(prevCards =>
            prevCards.map(card =>
              card.uniqueId === firstCard.uniqueId || card.uniqueId === secondCard.uniqueId
                ? { ...card, flipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  }, [flippedCards]);

  useEffect(() => {
    if (matchedCards.length === cardImages.length) {
      setGameOver(true);
    }
  }, [matchedCards]);

  const handleCardClick = (clickedCard) => {
    if (!clickedCard.flipped && flippedCards.length < 2 && !gameOver) {
      setCards(prevCards =>
        prevCards.map(card =>
          card.uniqueId === clickedCard.uniqueId ? { ...card, flipped: true } : card
        )
      );
      setFlippedCards(prevFlippedCards => [...prevFlippedCards, clickedCard]);
    }
  };

  useEffect(() => {
    if (gameOver) {
      navigate('/next-page');
    }
  }, [gameOver, navigate]);

  return (
    <div className={styles.gameContainer}>
      <h1>Memory Game</h1>
      <p>Moves: {moves}</p>
      <div className={styles.cardGrid}>
        {cards.map(card => (
          <div
            key={card.uniqueId}
            className={`${styles.card} ${card.flipped || matchedCards.includes(card.id) ? styles.flipped : ''}`}
            onClick={() => handleCardClick(card)}
          >
            <div className={styles.cardInner}>
              <div className={`${styles.cardFace} ${styles.front}`}>
                <img src={card.src} alt="card front" />
              </div>
              <div className={`${styles.cardFace} ${styles.back}`}>
                <img src={cardBack} alt="card back" />
              </div>
            </div>
          </div>
        ))}
      </div>
      {gameOver && <p>Поздравляем! Вы нашли все совпадения!</p>}
    </div>
  );
};

export default MemoryGame;
