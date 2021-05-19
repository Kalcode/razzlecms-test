import styled from 'styled-components';

import emailSVG from '../../images/email.svg';
import peopeSVG from '../../images/name.svg';

export const InputWrapper = styled.div`
  display: flex;
`;

export const Input = styled.input`
  background-image: url(${props =>
    props.icon === 'email' ? emailSVG : peopeSVG});
  background-size: 15px 15px;
  background-repeat: no-repeat;

  background-position: ${props =>
    props.icon === 'email' ? '8px 8px' : '11px 8px'};

  border-radius: 0;
  border: 3px solid rgba(0, 0, 0, 0);
  border-bottom: 3px solid rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  color: #3c3c3c;
  font-size: 16px;
  font-weight: 500;
  line-height: 6px;
  margin-right: 20px;
  margin-bottom: 5px;
  padding: 8px 8px 8px 39px;
  opacity: 0.75;
  outline: none;
  transition: opacity 0.15s ease-in;
  width: 100%;

  :active,
  :focus {
    opacity: 1;
  }
`;

export const SubmitInput = styled.input`
  appearance: none;
  background: transparent;
  border: 0;
  color: ${props => props.theme.colors.primary};
  font-size: 0.85em;
  font-weight: 600;
  text-transform: uppercase;
`;
