import React from 'react';

import { Wrapper, Section, Title } from './styles';

interface IHeaderContentProps {
  section: string;
  title: string;
}

const HeaderContent: React.FC<IHeaderContentProps> = ({
  section,
  title,
}: IHeaderContentProps) => {
  return (
    <Wrapper>
      <Section>{section}</Section>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default HeaderContent;
