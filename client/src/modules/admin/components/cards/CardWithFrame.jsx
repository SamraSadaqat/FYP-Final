import './card.css';

import PropTypes from 'prop-types';
import React from 'react';
const CardWithIframe = ({ src, title, description }) => (
    <div className="card">
      <iframe
        src={src}
        width="100%"
        height="200px"
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
  CardWithIframe.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  
  const App = () => {
    const cardData = [
      {
        src: 'https://www.youtube.com/embed/y_lNdXJjQDc?si=fqMjeV98dPFpIlaO',
        title: 'Yoga Poses for Kidney Health',
        description: 'Kidneys form an extremely important function of purifying the blood by filtering waste from it. They also help in functioning of the urinary system, secretion of hormones and maintenance of blood pressure level in the body. Yoga poses stimulate and massage various organs that help bring the body in an optimal condition. Strengthen your Kidneys with these 3 Yoga poses'
      },
      {
        src: 'https://www.youtube.com/embed/grfXR6FAsI8?si=GNdhePMd4v-HeOgm',
        title: '3-Minute Stress Management',
        description: 'Stress is the aspect of anxiety that we feel in our body. Worry is about thoughts, but stress is how our muscles get tense, our breathing gets tight, we feel achy, and our hands sweat. Stress is the physiological response to perceived danger. The good news is you can train your mind and body to be calm by doing simple activities throughout the day.'
      },
      {
        src: 'https://www.youtube.com/embed/rvotxh4VbLY?si=h8o0lJF9tgDHTKVz',
        title: 'Tips for Staying Active',
        description: ' Staying active can be challenging for people with CKD, but it is essential to maintain good health and slow the progression of the disease. In this video, we will provide some tips and tricks for staying active while managing CKD. From low-impact exercises to muscle-strengthening activities, we will cover a range of activities that can be incorporated into your daily routine.'
      },
      {
        src: 'https://www.youtube.com/embed/dnhkivD7eFE?si=FmflPKoP-1c5LEti',
        title: 'How to improve your kidney function',
        description: 'This video is designed for people who feel that they have a weak kidney like going to the toilet more than usual and feeling that the bladder is always full and have the urge to need to pee regularly.'
      },
      {
        src: 'https://www.youtube.com/embed/eXe-TkOrcpc?si=7VO6dsGQ92-5T4FZ',
        title: 'SIMPLE EXERCISE FOR DAILY ROUTINE FOR KIDNEY PATIENTS',
        description: 'Welcome to our video on simple daily exercises tailored specifically for kidney patients! Regular physical activity can greatly benefit those with kidney disease, helping to improve overall health, boost energy levels, and maintain a positive outlook. This gentle routine is designed to be safe and effective, focusing on improving flexibility, strength, and cardiovascular health without overexerting the body.'
      },
      {
        src: 'https://www.youtube.com/embed/behS6akNSag?si=Mg9qhhR7DQiefLpA',
        title: 'KIDNEY MERIDIAN EXERCISE',
        description: 'Do you experience pain in your kidneys and lower back? Try this 10 minute routine to stimulate the kidney meridian and get blood and energy flowing well through the kidneys.'
      }
    ];
  
    return (
      <div className="app-container">
        <div className="card-row">
          {cardData.slice(0, 3).map((card, index) => (
            <CardWithIframe
              key={index}
              src={card.src}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        <div className="card-row">
          {cardData.slice(3, 6).map((card, index) => (
            <CardWithIframe
              key={index}
              src={card.src}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    );
  };
  

  export default App;