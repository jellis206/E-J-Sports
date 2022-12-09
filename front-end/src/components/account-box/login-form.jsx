import { yupResolver } from '@hookform/resolvers/yup';
import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../services/app-store';
import { attemptUserLogin } from '../../services/login.service';
import { serverCodes } from '../../services/server-codes.enum';
import { checkValidity } from '../../services/server-instance.service';
import { useUserStore } from '../../services/user-store';
import { LoginSchema } from '../../validation/login-schemas';
import { Marginer } from '../marginer/marginer';
import { AccountContext } from './account-box';
import {
  BoldLink, FormBox, MutedLink, SubmitButton
} from './styles';

export const LoginForm = () => {
  const { switchToSignup } = useContext(AccountContext);
  const userState = useUserStore();
  const navigate = useNavigate();
  const appState = useAppStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const submitForm = async (data) => {
    appState.setLoading(true);
    const response = await attemptUserLogin(data);
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
      <Marginer direction="vertical" margin="2em" />
    </FormBox>
  );
};
