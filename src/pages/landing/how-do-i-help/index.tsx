import React from 'react';
import {
  Chatbubbles,
  Cloud,
  Desktop,
  Infinite,
  PhonePortrait,
  Server,
} from '@styled-icons/ionicons-solid';

import HeaderContent from '@/components/header-content';
import TechCard from '@/components/tech-card';

import { MainContent, Wrapper } from './styles';

const HowDoIHelp: React.FC = () => {
  const cards = [
    {
      icon: Desktop,
      title: 'Frontend',
      description:
        'Web and desktop development with the most popular frameworks.',
    },
    {
      icon: Server,
      title: 'Microservices',
      description:
        'Microservices with message brokers and async communication.',
    },
    {
      icon: Cloud,
      title: 'Cloud',
      description:
        'Infrastructure in Cloud Providers with IaC tools (Terraform, CloudFormation etc).',
    },
    {
      icon: PhonePortrait,
      title: 'Mobile',
      description:
        'Native rendering apps development for most known platforms.',
    },
    {
      icon: Infinite,
      title: 'CI/CD',
      description: 'Automated builds, tests, lintings etc with pipelines.',
    },
    {
      icon: Chatbubbles,
      title: 'Agile',
      description:
        'Explore teams communication to help improve the software development flow.',
    },
  ];

  return (
    <Wrapper name="about-me-p2">
      <HeaderContent section="About me" title="How do I help?" />
      <MainContent>
        {cards.map((card) => (
          <TechCard
            description={card.description}
            Icon={card.icon}
            key={card.title}
            title={card.title}
          />
        ))}
      </MainContent>
    </Wrapper>
  );
};

export default HowDoIHelp;
