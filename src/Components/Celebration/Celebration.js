import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Celebration.module.css';

const Celebration = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/question');
    }, 5000); // Переход через 5 секунд

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleContinue = () => {
    navigate('/question');
  };

  return (
    <div className={styles.celebrationContainer}>
      <div className={styles.text}>
        <h1>С Днем Рождения!</h1>
      </div>
      <div className={styles.gifContainer}>
        <img
          src="https://media.giphy.com/media/LnKonfpQ44fNvuGLkA/giphy.gif"
          alt="Celebration GIF"
        />
      </div>
      <button className={styles.continueButton} onClick={handleContinue}>
        Далее
      </button>
      {Array.from({ length: 10 }).map((_, index) => (
        <div key={index} className={styles.confetti}></div>
      ))}
    </div>
  );
};

export default Celebration;
