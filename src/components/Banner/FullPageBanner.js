/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

import {
  BannerWrapper,
  Banner,
  Overlay,
  BannerImage,
  TextContainer
} from './styles';
import { Fin } from '../Styles/Fin';
import { BannerInputs } from '../Inputs/BannerInputs';
import LinkBoxes from '../LinkBoxes';

const Wrapper = styled.div`
  padding: 80px;
  position: relative;
  width: auto;
`;

const Container = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 20px;
  position: relative;
`;

export default function FullPageBanner({ title, text, image, links = [] }) {
  return (
    <BannerWrapper>
      <Banner>
        <BannerImage src={image.url} alt={image.alt} />
        <Overlay />
      </Banner>
      <TextContainer>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <h3>{text}</h3>
      </TextContainer>
      <Wrapper>
        <Container>
          <Fin />
          <BannerInputs />
        </Container>
      </Wrapper>
      <LinkBoxes links={links} />
    </BannerWrapper>
  );
}
