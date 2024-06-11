import React from 'react';
import photo1 from '../../Assets/img/photoVika15.jpg';
import photo2 from '../../Assets/img/photoVika11.jpg';
import photo3 from '../../Assets/img/photoVika9.jpg';
import photo4 from '../../Assets/img/photoVika5.jpg';
import styles from './PhotoTextPage.module.css';

const photosWithText = [
  { src: photo1, text: 'волевой ученик, мудрый наставник, человек с огромным сердцем, красивейшим обликом и планами покорить эту жизнь, что непременно осуществится.' },
  { src: photo2, text: 'я вижу ее светлым человеком с большим сердцем она у меня ассоциируется чисто с кимчи и острым раменом у нее шелковистые и сияющие волосы,эстетичные пальчики и такие классные губы' },
  { src: photo3, text: 'я вижу тебя сильной, мудрой, стойкой в то же время нежной, милой, чувствительной, чуткой, ты очень красива во всех смыслах этого слова' },
  { src: photo4, text: 'вижу его как закат на море, как мириа‌ды звёзд, и как самого лучшего человека. вэйн буквально олицетворение джаза, игры на фортепиано, портретов в Лувре. он искусство. как внешне, так и внутренне. если бы он был местом, то это был бы сад за городом, где самые красивые и уютные вечера. или же океаном, где чувствуешь умиротворение и полное спокойствие.' },
  
];

const PhotoTextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {photosWithText.map((item, index) => (
          <div className={styles.column} key={index}>
            <img src={item.src} alt={`Photo ${index + 1}`} />
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoTextPage;

