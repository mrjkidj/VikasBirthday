import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BirthdayCountdown from './Components/BirthdayCountdown/BirthdayCountdown';
import QuestionPage from './Components/QuestionPage/QuestionPage';
import Celebration from './Components/Celebration/Celebration';
import MemoryGame from './Components/MemoryGame/MemoryGame';
import NextPage from './Components/NextPage/NextPage';
import PhotoTextPage from './Components/PhotoTextPage/PhotoTextPage';
import styles from './App.css';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Routes>
          <Route path="/" element={<BirthdayCountdown />} />
          <Route path="/celebration" element={<Celebration />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/memory-game" element={<MemoryGame />} />
          <Route path="/next-page" element={<NextPage />} />
          <Route path="/photo-text-page" element={<PhotoTextPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
