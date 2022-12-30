import React from 'react';

import { Subtitle, Title, Wrapper } from './styles';

export interface IWideCardProps extends React.HTMLAttributes<HTMLDivElement> {
  subtitle: string;
  title: string;
}

const WideCard: React.FC<IWideCardProps> = ({ className, subtitle, title }) => {
  return (
    <Wrapper className={className}>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Wrapper>
  );
};

export default WideCard;
