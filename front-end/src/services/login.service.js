import * as yup from 'yup';
import { useUserStore } from './user-store';
import { instance } from './server-instance.service';

export const logUserIn = (email, password) => {
  const userState = useUserStore();
  const credentials = { email, password };
  const validUser = getUser(credentials);
  if(validUser) {
    userState.setName(validUser.name);
    userState.setEmail(validUser.email);
    userState.setPassword(validUser.password);
    userState.setLoggedIn(true);
  }
};

export const logUserOut = () => {
  const userState = useUserStore();
  userState.logOut();
};

export const LoginSchema = yup.object({
  email: yup.string("You tryna hack me rn bro?")
    .required("Please enter your email")
    .email("Email must be a valid email... duh"),
  password: yup.string().required("Please enter your password")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
}).required();

const getUser = async (credentials) => {
  let response;
  try {
    response = await instance.get('/api/user', { email: credentials.email, password: credentials.password });
  } catch(error) {
    setError("error deleting a ticket" + error);
  } finally {
    return response.data;
  }
};