import React from 'react';
import { StyledIcon } from '@styled-icons/styled-icon';

import { Description, IconWrapper, Title, Wrapper } from './styles';

interface ITechCardProps {
  description: string;
  Icon: StyledIcon;
  title: string;
}

const TechCard: React.FC<ITechCardProps> = ({ description, Icon, title }) => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default TechCard;
