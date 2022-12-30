import React from 'react';
import ReactWordcloud, { Options } from 'react-wordcloud';

import { StyledSkills } from './styles';

interface ISkillsSection {
  options: Options;
  words: {
    text: string;
    value: number;
  }[];
}

const SkillsSection: React.FC<ISkillsSection> = ({ options, words }) => {
  return (
    <StyledSkills>
      <ReactWordcloud words={words} options={options} />
    </StyledSkills>
  );
};

export default React.memo(SkillsSection);
