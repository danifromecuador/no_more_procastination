// import { useEffect } from 'react';

// const Alarm = () => {
//   useEffect(() => {
//     // Function to play the alarm sound
//     const playAlarm = () => {
//       // Replace 'path/to/alarm-sound.mp3' with the actual path to your alarm sound file
//       const pathAudio = '../assets/alarm1.mp3';


//       const audio = new Audio(pathAudio);
//       audio.play();
//     };

//     // Function to calculate the next 15-minute interval
//     const getNextInterval = () => {
//       const now = new Date();
//       const minutes = now.getMinutes();
//       const nextInterval = 15 - (minutes % 15);
//       return new Date(now.getTime() + nextInterval * 60000);
//     };

//     // Function to update the alarm at the next 15-minute interval
//     const updateAlarm = () => {
//       const nextIntervalTime = getNextInterval().getTime();
//       const intervalId = setInterval(() => {
//         const currentTime = new Date().getTime();
//         if (currentTime >= nextIntervalTime) {
//           playAlarm();
//           clearInterval(intervalId);
//           updateAlarm(); // Schedule the next alarm
//         }
//       }, 1000); // Check every second
//     };

//     // Initialize the alarm
//     updateAlarm();

//     // Cleanup function to clear any intervals when the component unmounts
//     return () => clearInterval();

//   }, []); // The empty dependency array ensures that this effect runs only once

//   return (
//     <div className="alarm">
//       This is the alarm
//     </div>
//   );
// };

import React, { useState } from 'react';

const Alarm = () => {
  const [isAlarmOn, setIsAlarmOn] = useState(false);
  const audio = new Audio('/alarm1.mp3'); // Replace with your audio file path

  const handleToggle = () => {
    if (isAlarmOn) {
      audio.pause();
      audio.currentTime = 0; // Reset audio to the beginning
    } else {
      // Repeat the sound 10 times with a delay of 1000 milliseconds (1 second) between each repetition
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          audio.currentTime = 0;
          audio.play();
        }, i * 1000); // i * 1000 creates a delay of i seconds before each repetition
      }
    }
    setIsAlarmOn(!isAlarmOn);
  };
  

  return (
    <div className="toggle-button">
      <button onClick={handleToggle}>
        {isAlarmOn ? 'Turn Off' : 'Turn On'}
      </button>
    </div>
  );
};

export default Alarm;

