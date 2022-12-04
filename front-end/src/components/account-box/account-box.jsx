import React, { useState, createContext } from 'react';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';
import { useAppStore } from '../../services/app-store';
import {
  BoxContainer,
  TopContainer,
  HeaderContainer,
  InnerContainer,
  BackDrop,
  HeaderText,
  SmallText
} from './styles';

export const AccountContext = createContext(undefined);

export const AccountBox = () => {
  const [ isExpanded, setExpanded ] = useState(false);
  const [ active, setActive ] = useState('signin');

  const appState = useAppStore();

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive('signup');
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive('signin');
    }, 400);
  };

  const contextValue = { switchToSignup, switchToSignin };

  const backdropVariants = {
    expanded: {
      width: '233%',
      height: '1050px',
      borderRadius: '20%',
      transform: 'rotate(60deg)'
    },
    collapsed: {
      width: '160%',
      height: '550px',
      borderRadius: '50%',
      transform: 'rotate(60deg)'
    }
  };

  const expandingTransition = {
    type: 'spring',
    duration: 2.3,
    stiffness: 30
  };

  return (
    <AccountContext.Provider value={ contextValue }>
      { !appState.mobileMenuActive && (
        <BoxContainer>
          <TopContainer>
            <BackDrop
              initial={ false }
              animate={ isExpanded ? 'expanded' : 'collapsed' }
              variants={ backdropVariants }
              transition={ expandingTransition }
            />
            { active === 'signin' && (
              <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText>Please sign-in to continue!</SmallText>
              </HeaderContainer>
            ) }
            { active === 'signup' && (
              <HeaderContainer>
                <HeaderText>Create</HeaderText>
                <HeaderText>Account</HeaderText>
                <SmallText>Please sign-up to continue!</SmallText>
              </HeaderContainer>
            ) }
          </TopContainer>
          <InnerContainer>
            { active === 'signin' && <LoginForm /> }
            { active === 'signup' && <RegisterForm /> }
          </InnerContainer>
        </BoxContainer>
      ) }
    </AccountContext.Provider>
  );
};
