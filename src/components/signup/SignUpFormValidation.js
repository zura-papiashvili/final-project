import * as yup from "yup";

export const signUpFormValidationSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .min(2, "First Name must be at least 2 characters")
    .max(20, "First Name must be at most 20 characters"),

  lastName: yup
    .string()
    .required()
    .min(2, "Last Name must be at least 2 characters")
    .max(20, "Last Name must be at most 20 characters"),
  email: yup.string().email("Email is invalid").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
