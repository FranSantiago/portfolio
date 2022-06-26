import { Element } from 'react-scroll';
import styled from 'styled-components';

import { ContentWrapper } from '@/components/header-content/styles';
import breakpoints from '@/constants/breakpoints';

export const Cards = styled.div`
  display: grid;

  grid-template-columns: repeat(auto-fill, 250px);
  row-gap: 1rem;

  justify-content: space-between;
  align-items: start;

  margin-top: 1.4rem;

  @media only screen and (max-width: ${breakpoints.large.width.max}px) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: ${breakpoints.small.width.max}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContentBackground = styled.p`
  position: absolute;
  top: 10rem;

  font-family: 'Indie Flower', sans-serif;
  font-size: 7rem;
  letter-spacing: 0.2rem;

  color: rgba(255, 255, 255, 0.1);

  transform: rotate(-12deg);

  @media only screen and (max-width: ${breakpoints.small.width.max}px) {
    font-size: 5.8rem;
    position: relative;
    top: 0;

    margin-top: 2rem;
  }

  @media only screen and (max-width: ${breakpoints.xsmall.width.max}px) {
    font-size: 3.5rem;
  }

  @media only screen and (max-width: 300px) {
    font-size: 2.8rem;
  }
`;

export const Description = styled.div`
  p {
    color: var(--secondary-text);
    font-size: 1.2rem;

    text-align: justify;

    @media only screen and (max-width: ${breakpoints.small.width.max}px) {
      font-size: 1.2rem;
      margin-top: 1rem;
    }
  }
`;

export const Details = styled.div`
  position: absolute;
  top: 9rem;

  width: 35rem;
  min-width: 15rem;

  @media only screen and (max-width: ${breakpoints.large.width.max}px) {
    top: 4rem;
  }

  @media only screen and (max-width: ${breakpoints.small.width.max}px) {
    position: relative;
    top: 0;

    width: 87%;
  }
`;

export const LeftContent = styled(ContentWrapper)`
  position: relative;
  grid-area: left-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${breakpoints.large.width.max}px) {
    height: 65vh;
  }

  @media only screen and (max-width: ${breakpoints.small.width.max}px) {
    height: 100%;
  }
`;

export const RightContent = styled(ContentWrapper)`
  position: relative;
  grid-area: right-content;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0;

  @media only screen and (max-width: ${breakpoints.large.width.max}px) {
    height: 70vh;
  }

  @media only screen and (max-width: ${breakpoints.small.width.max}px) {
    height: 100%;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  font-weight: bold;

  margin-bottom: 1rem;

  @media only screen and (max-width: ${breakpoints.small.width.max}px) {
    display: none;
  }
`;

export const Wrapper = styled(Element)`
  background-color: var(--secondary-bg);

  display: grid;

  grid-template-columns: repeat(2, 1fr);

  grid-template-areas:
    'header-content header-content'
    'left-content right-content';

  border-bottom: 1px solid var(--gray);

  @media only screen and (max-width: ${breakpoints.large.width.max}px) {
    grid-template-columns: 1fr;

    grid-template-areas:
      'header-content'
      'right-content'
      'left-content';
  }

  @media only screen and (max-width: ${breakpoints.small.width.max}px) {
    display: flex;
    flex-direction: column;
  }
`;

export const YearsOfExperience = styled.p`
  position: absolute;
  top: 14rem;

  max-width: 250px;
  font-size: 3rem;

  span {
    display: block;

    color: var(--primary-text);
    font-size: 5rem;
    text-align: center;
    font-weight: 600;
  }

  @media only screen and (max-width: ${breakpoints.small.width.max}px) {
    position: relative;
    top: 0;

    font-size: 2.3rem;
    text-align: center;
    margin-bottom: 3rem;

    span {
      font-size: 4rem;
    }
  }
`;
