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
import { userStore } from '../services/user-store';

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const userState = userStore();

  return (
    <FormBoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
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
