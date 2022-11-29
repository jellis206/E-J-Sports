import * as yup from 'yup';
import { useUserStore } from './user-store';

const userState = useUserStore();

export const login = (email, password) => {
  userState.setUserEmail(email);
  userState.setUserPass;
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