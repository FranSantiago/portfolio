import React from 'react';

import MenuOptions from '@/constants/menu';

import { CloseIcon, Option, Wrapper } from './styles';

interface IBlanketProps {
  isVisible: boolean;
  onClickOption(): null | void;
  onClose(): null | void;
}

const Blanket: React.FC<IBlanketProps> = ({
  isVisible,
  onClickOption,
  onClose,
}: IBlanketProps) => {
  return isVisible ? (
    <Wrapper isVisible={isVisible}>
      <CloseIcon onClick={onClose} />
      {MenuOptions.map((option) => (
        <Option key={option.name} name={option.name} onClick={onClickOption}>
          {option.content}
        </Option>
      ))}
    </Wrapper>
  ) : null;
};

export default Blanket;
