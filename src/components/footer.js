import React from 'react';
import styled from '@emotion/styled';

const SlideFooter = styled.footer`
  flex-shrink: 0;
  width: 100%;
`;

const ProgressBar = styled.span`
  display: block;
  height: 7px;
  background-color: black;
  transition: 200ms linear width;
  width: ${props => (props.currentSlideIndex / props.count) * 100}%;
`;

export const Footer = ({ currentSlideIndex, count }) => {
  return (
    <SlideFooter>
      <ProgressBar {...{ currentSlideIndex, count }} />
      {currentSlideIndex}/{count}
    </SlideFooter>
  );
};
