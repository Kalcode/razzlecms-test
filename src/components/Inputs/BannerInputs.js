import React from 'react';
import { InputWrapper, Input, SubmitInput } from './styles';

export function BannerInputs() {
  return (
    <InputWrapper>
      <Input type="text" placeholder="Your Name" icon="people" />
      <Input type="text" placeholder="Email" icon="email" />
      <Input type="text" placeholder="How Can We Help?" icon="people" />
      <SubmitInput type="submit" value="Submit Request" />
    </InputWrapper>
  );
}
