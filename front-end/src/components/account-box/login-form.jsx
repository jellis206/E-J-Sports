import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { attemptUserLogin } from '../../services/login.service';
import { serverCodes } from '../../services/server-codes.enum';
import { checkValidity } from '../../services/server-instance.service';
import { useUserStore } from '../../services/user-store';
import { LoginSchema } from '../../validation/login-schemas';
import { Marginer } from '../marginer/marginer';
import { AccountContext } from './account-box';
import {
  BoldLink, FormBox, Input,
  MutedLink, SubmitButton
} from './styles';

export const LoginForm = () => {
  const { switchToSignup } = useContext(AccountContext);
  const userState = useUserStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const submitForm = async (data) => {
    const response = await attemptUserLogin(data);
    if (checkValidity(response) === serverCodes.Good) {
      userState.signUserIn(response.data.user);
      navigate('/account');
    }
    reset();
  };

  return (
    <FormBox onSubmit={ handleSubmit(submitForm) }>
      <Input type="email"
        placeholder={ errors.email ? errors.email.message : "Email" }
        { ...register('email') } />

      <Input
        type="password"
        placeholder={ errors.password ? errors.password.message : "Password" }
        { ...register('password') }
      />
      <Marginer direction="vertical" margin={ 10 } />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton type="submit" >Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{ ' ' }
        <BoldLink href="#" onClick={ switchToSignup }>
          Signup
        </BoldLink>
      </MutedLink>
    </FormBox>
  );
};
