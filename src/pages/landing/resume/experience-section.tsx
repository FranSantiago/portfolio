import Timeline from '@/components/timeline';
import React from 'react';
import { experiences } from './constants';

import { StyledExperience } from './styles';

const ExperienceSection: React.FC = () => (
  <StyledExperience>
    <Timeline items={experiences} />
  </StyledExperience>
);

export default ExperienceSection;
