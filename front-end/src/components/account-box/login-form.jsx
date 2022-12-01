import React, { useContext } from 'react';
import {
  BoldLink,
  FormBoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton
} from './styles';
import { Marginer } from '../marginer/marginer';
import { AccountContext } from './account-box';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema, logUserIn } from '../../services/login.service';

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({ resolver: yupResolver(LoginSchema) });
  const onSubmit = (data) => logUserIn(data.email, data.password);

  return (
    <FormBoxContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" placeholder="Email" {...register('email')} />
        <p>{errors.email?.message}</p>
        <Input
          type="password"
          placeholder="Password"
          {...register('password')}
        />
        <p>{errors.password?.email}</p>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{' '}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </FormBoxContainer>
  );
}
