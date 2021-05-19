/* eslint-disable react/prop-types */
import React from 'react';

import { LinkBoxWrapper, LinkBox, StyledLink, TitleText } from './styles';

export default function LinkBoxes({ links = [] }) {
  return (
    <LinkBoxWrapper>
      {links.map(({ label, url }, index) => (
        <LinkBox key={url} index={index}>
          <TitleText>
            <span>{label}</span>
            <br />
            <span>Services</span>
          </TitleText>
          <StyledLink to={url}>Explore {label}</StyledLink>
        </LinkBox>
      ))}
    </LinkBoxWrapper>
  );
}
