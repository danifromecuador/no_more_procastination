import { useState } from 'react';

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

