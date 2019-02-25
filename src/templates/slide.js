import React from 'react';
import { graphql } from 'gatsby';

export default ({
  data: { slide },
  transition,
  pageContext: { index, totalCount },
}) => (
  <div>
    <div
      style={transition && transition.style}
      dangerouslySetInnerHTML={{ __html: slide.html }}
    />
    <span>
      {index}/{totalCount}
    </span>
  </div>
);

export const query = graphql`
  query SlideQuery($index: Int!) {
    slide(index: { eq: $index }) {
      html
      index
    }
  }
`;
