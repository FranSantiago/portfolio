import React from 'react';

import DetailsCard from '@/components/details-card';
import HeaderContent from '@/components/header-content';

import {
  Cards,
  ContentBackground,
  Description,
  Details,
  LeftContent,
  RightContent,
  Title,
  Wrapper,
  YearsOfExperience,
} from './styles';

const WhoAmI: React.FC = () => {
  const yearsOfXp = new Date().getFullYear() - 2018;

  return (
    <Wrapper name="about-me">
      <HeaderContent section="About me" title="Who am I?" />
      <RightContent>
        <Details>
          <Title>Françoar Santiago&apos;s details</Title>
          <Description>
            <p>
              I have a Bsc in Computer Science from the UNINORTE (Amazonas,
              Brazil) and about {yearsOfXp} years of experience with systems
              development.
            </p>
            <p>
              I&apos;ve been working as Software Engineer and Tech Lead,
              improving and developing products that integrate functionalities
              between company departments and track raw materials
              transformation, like a MES (Manufacturing Execution System).
            </p>
            <p>Keep scrolling to see more about my tech stack!</p>
          </Description>
          <Cards>
            <DetailsCard title="Name" description="Françoar Santiago" />
            <DetailsCard title="Email" description="fransantiago0@gmail.com" />
            <DetailsCard title="LinkedIn" description="/francoarsantiago" />
            <DetailsCard title="Github" description="/fransantiago" />
          </Cards>
        </Details>
      </RightContent>

      <LeftContent>
        <ContentBackground>Experience</ContentBackground>

        <YearsOfExperience>
          <span>{yearsOfXp}+</span>
          years of experience
        </YearsOfExperience>
      </LeftContent>
    </Wrapper>
  );
};

export default WhoAmI;
