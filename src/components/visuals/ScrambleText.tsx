import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const CYBER_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(true);
  
  useEffect(() => {
    let interval: any;
    let counter = 0;
    
    const startScramble = () => {
      interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((char, index) => {
              if (index < counter) {
                return text[index];
              }
              return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
            })
            .join('')
        );

        counter += 1 / 3; // Slow down the reveal

        if (counter >= text.length) {
          clearInterval(interval);
          setDisplayText(text);
          setIsScrambling(false);
        }
      }, 30);
    };

    const timeout = setTimeout(startScramble, delay * 1000);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, delay]);

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: delay }}
    >
      {displayText}
    </motion.span>
  );
};

export default ScrambleText;
