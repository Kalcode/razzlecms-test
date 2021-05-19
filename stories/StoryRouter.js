import React from 'react';
import { MemoryRouter } from 'react-router-dom';

export default function StoryRouter(storyFunc) {
  return <MemoryRouter initialEntries={['/']}>{storyFunc()}</MemoryRouter>;
}
