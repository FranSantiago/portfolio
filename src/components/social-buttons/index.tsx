import React from 'react';

import { GithubLogo, Link, LinkedinLogo, MailLogo, Wrapper } from './styles';

const SocialButtons: React.FC = () => {
  return (
    <Wrapper>
      <Link href="mailto:fransantiago0@gmail.com">
        <MailLogo />
      </Link>

      <Link
        href="https://www.linkedin.com/in/francoarsantiago/"
        target="_blank"
      >
        <LinkedinLogo />
      </Link>
      <Link href="https://github.com/fransantiago" target="_blank">
        <GithubLogo />
      </Link>
    </Wrapper>
  );
};

export default SocialButtons;
