import React from 'react';
import Typewriter from 'typewriter-effect';

interface ITyperProps {
  texts: string[];
  typingDelayMs: number;
}

const concatTextsForTypewriter = (texts: string[]): string => {
  return texts.join('');
};

const Typer: React.FC<ITyperProps> = ({
  texts,
  typingDelayMs: typingDelay,
}: ITyperProps) => {
  return (
    <Typewriter
      onInit={(writer) =>
        writer
          .changeDelay(typingDelay)
          .typeString(concatTextsForTypewriter(texts))
          .start()
      }
    />
  );
};

export default Typer;
