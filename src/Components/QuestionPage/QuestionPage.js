import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './QuestionPage.module.css';

const QuestionPage = () => {
  const navigate = useNavigate();
  const [buttonsMoved, setButtonsMoved] = useState(false);
  const [showTick, setShowTick] = useState(false);

  useEffect(() => {
    const tickTimer = setTimeout(() => {
      setShowTick(true);
    }, 5000);

    return () => clearTimeout(tickTimer);
  }, []);

  const nextPage = () => {
    navigate('/memory-game');
  };

  const moveButtons = (event) => {
    if (!buttonsMoved) {
      const yesButton = document.getElementById('yesButton');
      const noButton = document.getElementById('noButton');
      const xYes = event.clientX + Math.random() * 100;
      const yYes = event.clientY + Math.random() * 100;
      const xNo = event.clientX + Math.random() * 100;
      const yNo = event.clientY + Math.random() * 100;
      yesButton.style.left = `${xYes}px`;
      yesButton.style.top = `${yYes}px`;
      noButton.style.left = `${xNo}px`;
      noButton.style.top = `${yNo}px`;
    }
  };

  const handleButtonClick = (buttonId) => {
    if (!buttonsMoved) {
      setButtonsMoved(true);
    }
    if (buttonId === 'yesButton') {
      // Add any specific action for 'Yes' button click here
      nextPage();
    } else if (buttonId === 'noButton') {
      // Add any specific action for 'No' button click here
    }
  };

  return (
    <div
      className={styles.container}
      onMouseMove={moveButtons}
    >
      <div className={styles.text}>
        <h1 className={styles.headerText}>Ты готова отправиться в путешествие?</h1>
      </div>
      <div className={styles.gifContainer}>
        <img
          src="https://media.giphy.com/media/LnKonfpQ44fNvuGLkA/giphy.gif"
          alt="Cute animated illustration"
        />
      </div>
      <div className={styles.buttons}>
        <button
          className={styles.btn}
          id="yesButton"
          onClick={() => handleButtonClick('yesButton')}
          style={{ position: 'absolute' }}
        >
          Да
        </button>
        <button
          className={styles.btn}
          id="noButton"
          onClick={() => handleButtonClick('noButton')}
          style={{ position: 'absolute' }}
        >
          Нет
        </button>
      </div>
      {showTick && (
        <div
          className={styles.tick}
          onClick={nextPage}
        >
          &#10003;
        </div>
      )}
    </div>
  );
};

export default QuestionPage;
