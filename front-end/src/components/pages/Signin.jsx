import React from 'react';
import './styles.css';
import styled from 'styled-components';
import { AccountBox } from '../account-box/account-box';

const SigninContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function Signin() {
  return (
    <SigninContainer>
      <AccountBox />
    </SigninContainer>
  );
}

export default Signin;
