import React from 'react';

import { useAppSelector } from '@/store';

import Brand from './brand';
import Options from './options';

import { Content, HamburgerIcon, Wrapper } from './styles';

interface INavbarProps {
  onClickHamburger(): null | void;
}

const Navbar: React.FC<INavbarProps> = ({ onClickHamburger }: INavbarProps) => {
  const { isScrolling, isSmallScreen } = useAppSelector(({ page }) => page);

  return (
    <Wrapper>
      <Content>
        {!isSmallScreen && !isScrolling ? <Brand /> : null}
        {isSmallScreen || isScrolling ? (
          <HamburgerIcon onClick={onClickHamburger} />
        ) : (
          <Options />
        )}
      </Content>
    </Wrapper>
  );
};

export default Navbar;
