import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const StatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin: 100px auto;
  max-width: 1080px;

  ${breakpoint('tablet')`
    flex-direction: row;
  `}
`;

export const Stat = styled.div`
  max-width: 33%;
`;

export const StatTitle = styled.div`
  color: ${props => props.theme.colors.primary};
  filter: brightness(0.85);
  font-size: 2em;
  font-weight: 600;
  margin-bottom: 20px;

  ${breakpoint('tablet')`
    font-size: 3em;
  `}

  ${breakpoint('desktop')`
    font-size: 4em;
  `}
`;

export const StatBody = styled.div`
  line-height: 2;
  max-width: 300px;
`;
