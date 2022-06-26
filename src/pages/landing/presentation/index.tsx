import React from 'react';
import { useMediaQuery } from 'react-responsive';

import breakpoints from '@/constants/breakpoints';

import Dev from '@/components/dev-icon';
import LetsChatButton from '@/components/lets-chat-button';
import SocialButtons from '@/components/social-buttons';
import Typer from '@/components/typer';

import {
  Badge,
  Bio,
  Content,
  InnerLeftContentWrapper,
  LeftContent,
  Quote,
  RightContent,
  Social,
  Wrapper,
} from './styles';

const Presentation: React.FC = () => {
  const isSmallScreen = useMediaQuery({
    query: `(max-width: ${breakpoints.small.width.max}px)`,
  });

  const bioTexts = [
    isSmallScreen ? `<p>Hello, I'm Françoar!</p>` : '',
    `I'm completely passionate about knowledge and problem
    solving. After explore as much as I can, I apply the best
    practices.`,
  ];

  return (
    <Wrapper name="presentation">
      <Content>
        <LeftContent>
          <InnerLeftContentWrapper>
            <Badge>
              <p>Software Engineer</p>
            </Badge>
            <Quote>
              <span>First,</span>
              <span>Solve the problem.</span>
              <span>Then, write the code.</span>
            </Quote>

            <Bio>
              <Typer texts={bioTexts} typingDelayMs={40} />
            </Bio>

            <LetsChatButton />
          </InnerLeftContentWrapper>
        </LeftContent>

        {!isSmallScreen && (
          <RightContent>
            <Dev />
          </RightContent>
        )}
        <Social>
          <SocialButtons />
        </Social>
      </Content>
    </Wrapper>
  );
};

export default Presentation;
