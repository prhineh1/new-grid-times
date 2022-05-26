import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES, COLORS } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <OpinionLink href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </OpinionLink>
  );
};

const OpinionLink = styled.a`
  flex: 1 1 100%;

  & + & {
    border-top: 1px solid ${COLORS.gray[300]};
    padding-top: 16px;
  }

  @media ${QUERIES.tabletOnly} {
    border: 0;
    padding-top: 0;
    flex: 1 1 20%;

    & + & {
      border-top: 0;
      padding-top: 0;
    }
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
