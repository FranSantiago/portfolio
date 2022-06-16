import React from 'react';
import { useMediaQuery } from 'react-responsive';

import breakpoints from '@/constants/breakpoints';

import Brand from './brand';
import Options from './options';

import { Content, HamburgerIcon, Wrapper } from './styles';

interface INavbarProps {
  onClickHamburger(): null | void;
}

const Navbar: React.FC<INavbarProps> = ({ onClickHamburger }: INavbarProps) => {
  const isSmallScreen = useMediaQuery({
    query: `(max-width: ${breakpoints.small.width.max}px)`,
  });

  return (
    <Wrapper>
      <Content>
        {!isSmallScreen && <Brand />}
        {isSmallScreen ? (
          <HamburgerIcon onClick={onClickHamburger} />
        ) : (
          <Options />
        )}
      </Content>
    </Wrapper>
  );
};

export default Navbar;
