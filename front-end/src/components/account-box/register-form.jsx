import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useAppStore } from '../../services/app-store';
import { useNavigate } from 'react-router-dom';
import { attemptRegisterUser } from '../../services/register.service';
import { serverCodes } from '../../services/server-codes.enum';
import { checkValidity } from '../../services/server-instance.service';
import { useUserStore } from '../../services/user-store';
import { RegisterSchema } from '../../validation/login-schemas';
import { Marginer } from '../marginer/marginer';
import { AccountContext } from './account-box';
import {
  BoldLink, FormBox, MutedLink,
  SubmitButton
} from './styles';

export const RegisterForm = () => {
  const { switchToSignin } = useContext(AccountContext);
  const userState = useUserStore();
  const navigate = useNavigate();
  const appState = useAppStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  const submitForm = async (data) => {
    appState.setLoading(true);
    const response = await attemptRegisterUser(data);
    if (checkValidity(response) === serverCodes.Good) {
      userState.signUserIn(response.data.user);
      navigate('/account');
    }
    reset();
    appState.setLoading(false);
  };

  return (
    <FormBox onSubmit={ handleSubmit(submitForm) }>
      <TextField
        type="text"
        label="Full Name"
        fullWidth
        helperText={ errors.name ? errors.name.message : " " }
        error={ errors.name ? true : false }
        color={ errors.name ? "error" : "primary" }
        variant="outlined"
        margin="dense"
        size="small"
        { ...register('name') } />

      <TextField
        type="email"
        label="Email"
        fullWidth
        helperText={ errors.email ? errors.email.message : " " }
        error={ errors.email ? true : false }
        color={ errors.email ? "error" : "primary" }
        variant="outlined"
        margin="dense"
        size="small"
        { ...register('email') } />

      <TextField
        type="password"
        label="Password"
        fullWidth
        helperText={ errors.password ? errors.password.message : " " }
        error={ errors.password ? true : false }
        color={ errors.password ? "error" : "primary" }
        variant="outlined"
        margin="dense"
        size="small"
        { ...register('password') }
      />

      <TextField
        type="password"
        label="Confirm Password"
        fullWidth
        helperText={ errors.password ? errors.password.message : " " }
        error={ errors.password ? true : false }
        color={ errors.password ? "error" : "primary" }
        variant="outlined"
        margin="dense"
        size="small"
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
      <Marginer direction="vertical" margin="1em" />
    </FormBox>
  );
};