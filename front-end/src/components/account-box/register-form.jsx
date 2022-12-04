import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { attemptRegisterUser } from '../../services/register.service';
import { serverCodes } from '../../services/server-codes.enum';
import { checkValidity } from '../../services/server-instance.service';
import { useUserStore } from '../../services/user-store';
import { RegisterSchema } from '../../validation/login-schemas';
import { Marginer } from '../marginer/marginer';
import { AccountContext } from './account-box';
import {
  BoldLink, FormBox, Input, MutedLink,
  SubmitButton
} from './styles';

export const RegisterForm = () => {
  const { switchToSignin } = useContext(AccountContext);
  const userState = useUserStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  const submitForm = async (data) => {
    const response = await attemptRegisterUser(data);
    if (checkValidity(response) === serverCodes.Good) {
      userState.signUserIn(response.data.user);
      navigate('/account');
    }
    reset();
  };

  return (
    <FormBox onSubmit={ handleSubmit(submitForm) }>
      <Input type="text"
        placeholder={ errors.name ? errors.email.name : "Full Name" }
        { ...register('name') } />

      <Input type="email"
        placeholder={ errors.email ? errors.email.message : "Email" }
        { ...register('email') } />

      <Input
        type="password"
        placeholder={ errors.password ? errors.password.message : "Password" }
        { ...register('password') }
      />

      <Input
        type="password"
        placeholder={
          errors.confirmPassword
            ? errors.confirmPassword.message
            : "Confirm Password"
        }
        { ...register('confirmPassword') }
      />
      <Marginer direction="vertical" margin={ 10 } />
      <SubmitButton type="submit">Register</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={ switchToSignin }>
          Signin
        </BoldLink>
      </MutedLink>
    </FormBox>
  );
};