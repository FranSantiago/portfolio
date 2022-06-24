import React from 'react';

import Wrapper from './styles';

interface IDetailsCardProps {
  title: string;
  description: string;
}

const DetailsCard: React.FC<IDetailsCardProps> = ({
  description,
  title,
}: IDetailsCardProps) => {
  return (
    <Wrapper>
      <p>{title}</p>
      <p>{description}</p>
    </Wrapper>
  );
};

export default DetailsCard;
