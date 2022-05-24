import React from 'react';
import styled from 'styled-components/macro';
import format from 'date-fns/format';
import { Menu, Search } from 'react-feather';
import { QUERIES, COLORS } from '../../constants';


const Logo = (props) => {
  return (
    <Wrapper>
      <ActionGroup>
        <button>
          <Search size={24} />
        </button>
        <button>
          <Menu size={24} />
        </button>
      </ActionGroup>
        <Link href="/" {...props}>
          New Grid Times
        </Link>
        <TodaysDate>
          {format(new Date(), 'EEEE, MMMM do, yyyy')}
        </TodaysDate>
        <RightGroup>
          <SubscribeButton>Subscribe</SubscribeButton>
          <SubscriberLink>Already a subscriber?</SubscriberLink>
        </RightGroup>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  @media ${QUERIES.desktopAndUp} {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 3fr 1fr;
    justify-items: center;
    align-items: center;
  }
`;


const SubscribeButton = styled.button`
  padding: 11px 24px;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  border-radius: 4px;
  font-size: 1rem;
  line-height: 18px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Helvetica';
`;

const SubscriberLink = styled.a`
  font-size: calc(14rem / 16);
  line-height: 22px;
  font-weight: 400;
  font-style: italic;
  text-decoration-line: underline;
  color: ${COLORS.gray[900]};
  align-self: flex-start;
  margin-top: -1rem;
`;

const RightGroup = styled.div`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3fr 1fr;
    align-self: stretch;
    align-items: center;
    justify-self: flex-end;
    justify-items: center;
    grid-column: 3 / 4;
    grid-row: 1 / 3;
  }
`;

const ActionGroup = styled.div`
  display: none;
  justify-self: flex-start;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
    gap: 30px;
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;

const Link = styled.a`
  font-family: var(--font-family-logo);
  font-size: 3rem;
  grid-column: 2 / 3;
  grid-row: 1 / 2;

  @media ${QUERIES.desktopAndUp} {
    font-size: calc(64rem / 16);
  }
`;

const TodaysDate = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  margin-top: -1rem;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: flex-start;
  text-align: center;
`;

export default Logo;
