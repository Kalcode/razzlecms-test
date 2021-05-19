import React from 'react';
import { StatsWrapper, Stat, StatTitle, StatBody } from './styles';

const Stats = ({ stats = [] }) => {
  return (
    <StatsWrapper>
      {stats.map(({ title, body }) => (
        <Stat key={`stat-${title}`}>
          <StatTitle>{title}</StatTitle>
          <StatBody>{body}</StatBody>
        </Stat>
      ))}
    </StatsWrapper>
  );
};

export default Stats;
