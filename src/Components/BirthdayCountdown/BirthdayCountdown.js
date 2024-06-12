import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './BirthdayCountdown.module.css';

const calculateTimeLeft = () => {
  const difference = +new Date('2024-06-12T10:40:00') - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
};

const BirthdayCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Check if the countdown has finished
    if (Object.keys(timeLeft).length === 0) {
      navigate('/celebration');
    }

    return () => clearTimeout(timer);
  }, [timeLeft, navigate]);

  return (
    <div className={styles.countdownContainer}>
      <h1>Отсчет до дня рождения</h1>
      <div className={styles.clock}>
        <div className={`${styles.clockHand} ${styles.hourHand}`}></div>
        <div className={`${styles.clockHand} ${styles.minuteHand}`}></div>
        <div className={`${styles.clockHand} ${styles.secondHand}`}></div>
      </div>
      <div className={styles.timeSection}>
        {timeLeft.days || '0'} <div className={styles.label}>Дней</div>
      </div>
      <div className={styles.timeSection}>
        {timeLeft.hours || '0'} <div className={styles.label}>Часов</div>
      </div>
      <div className={styles.timeSection}>
        {timeLeft.minutes || '0'} <div className={styles.label}>Минут</div>
      </div>
      <div className={styles.timeSection}>
        {timeLeft.seconds || '0'} <div className={styles.label}>Секунд</div>
      </div>
    </div>
  );
};

export default BirthdayCountdown;
