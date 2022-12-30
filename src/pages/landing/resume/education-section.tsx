import React from 'react';

import WideCard from '@/components/wide-card';

import { cards } from './constants';

import { StyledEducation, InterconnWrapper } from './styles';

const Interconnections: React.FC = () => (
  <InterconnWrapper>
    <div />
    <div />
    <div />
    <div />
  </InterconnWrapper>
);

const EducationSection: React.FC = () => (
  <StyledEducation>
    <Interconnections />
    {cards.map((card) => (
      <WideCard
        className="widecard"
        key={card.title}
        subtitle={card.subtitle}
        title={card.title}
      />
    ))}
  </StyledEducation>
);

export default EducationSection;
