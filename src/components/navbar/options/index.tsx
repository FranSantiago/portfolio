import React from 'react';

import MenuOptions from '@/constants/menu';

import { Option, Wrapper } from './styles';

const Options: React.FC = () => {
  return (
    <Wrapper>
      {MenuOptions.map((option) => (
        <Option key={option.name} name={option.name}>
          {option.content}
        </Option>
      ))}
    </Wrapper>
  );
};

export default Options;
