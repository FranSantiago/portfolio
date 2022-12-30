import React from 'react';

import { safetyMatchColors } from '@/pages/landing/resume/constants';

import { Ball, Card, Description, Line, Period, Wrapper } from './styles';

export interface IItems {
  period: {
    title: string;
    subtitle: string;
  };
  description: {
    title: string;
    subtitle: string;
    techs?: string;
  };
}

export interface ITimelineProps {
  items: IItems[];
}

interface ISafetyMatchProps {
  bgColor: string;
}

const SafetyMatch: React.FC<ISafetyMatchProps> = ({ bgColor }) => (
  <Line>
    <Ball bgColor={bgColor} />
  </Line>
);

const Timeline: React.FC<ITimelineProps> = ({ items }) => {
  return (
    <Wrapper>
      {items.map((item, index) => (
        <Card
          className="tl-card"
          key={item.period.title + item.period.subtitle}
        >
          <Period className="tl-card-period">
            <p className="tl-card-period-title">{item.period.title}</p>
            <p className="tl-card-period-subtitle">{item.period.subtitle}</p>
          </Period>
          <SafetyMatch
            bgColor={safetyMatchColors[index % safetyMatchColors.length]}
          />
          <Description className="tl-card-description">
            <p className="tl-card-description-title">
              {item.description.title}
            </p>
            <p className="tl-card-description-subtitle">
              {item.description.subtitle}
            </p>

            {item.description.techs && (
              <p className="tl-card-description-techs">
                Stack: {item.description.techs}
              </p>
            )}
          </Description>
        </Card>
      ))}
    </Wrapper>
  );
};

export default Timeline;
