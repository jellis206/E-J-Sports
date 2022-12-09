import * as yup from 'yup';

export const RegisterSchema = yup.object().shape({
  name: yup.string("Enter your NAME").required("Forgot your name?"),
  email: yup.string("You tryna hack me rn bro?")
    .required("Please enter your email")
    .email("Email must be a valid email... duh"),
  password: yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Please enter your password"),
  confirmPassword: yup.string().required('Passwords must match')
    .oneOf([ yup.ref('password'), null ], 'Passwords must match')
});

export const LoginSchema = yup.object().shape({
  email: yup.string("You tryna hack me rn bro?")
    .email("Email must be a valid email... duh")
    .required("Please enter your email"),
  password: yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[^\w]/, "Password requires a symbol")
    .required("Please enter your password")
});

export const UpdateUserSchema = yup.object().shape({
  name: yup.string("Enter your NAME"),
  email: yup.string("You tryna hack me rn bro?")
    .email("Email must be a valid email... duh"),
  password: yup.string()
    .min(8, "Password must be at least 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[^\w]/, "Password requires a symbol"),
  confirmPassword: yup.string()
    .oneOf([ yup.ref('password'), null ], 'Passwords must match')
});

/** .min(8, "Password must be at least 8 characters long")
    .matches(/[0-9]/, "Password requires a number")
    .matches(/[A-Z]/, "Password requires an uppercase letter")
    .matches(/[a-z]/, "Password requires a lowercase letter")
    .matches(/[^\w]/, "Password requires a symbol"), */