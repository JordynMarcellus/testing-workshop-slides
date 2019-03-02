import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Footer } from '../components/footer';

const SlideSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0;
`;

const SlideFooter = styled.footer`
  flex-shrink: 0;
`;

const SlideWrapper = styled.div`
  max-width: 80vw;
`;

export default ({
  data: { slide },
  transition,
  pageContext: { index, totalCount },
}) => (
  <Fragment>
    <SlideSection>
      <SlideWrapper dangerouslySetInnerHTML={{ __html: slide.html }} />
    </SlideSection>
    <Footer currentSlideIndex={index} count={totalCount} />
  </Fragment>
);

export const query = graphql`
  query SlideQuery($index: Int!) {
    slide(index: { eq: $index }) {
      html
      index
    }
  }
`;
