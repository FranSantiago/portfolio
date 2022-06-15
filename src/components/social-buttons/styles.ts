import styled from 'styled-components';

import { Mail, LogoGithub, LogoLinkedin } from '@styled-icons/ionicons-solid';

const LOGO_SIZE = 1.5;

export const Link = styled.a`
  text-decoration: underline;
`;

export const GithubLogo = styled(LogoGithub)`
  height: ${LOGO_SIZE}rem;

  cursor: pointer;
`;

export const LinkedinLogo = styled(LogoLinkedin)`
  height: ${LOGO_SIZE}rem;

  cursor: pointer;
`;

export const MailLogo = styled(Mail)`
  margin-top: -0.2rem;
  height: ${LOGO_SIZE + 0.4}rem;

  cursor: pointer;
`;

export const Wrapper = styled.div`
  display: flex;

  a:not(:first-child) {
    margin-left: 2rem;
  }

  a:hover * {
    fill: var(--tertiary-bg);
  }
`;
