import * as yup from "yup";

export const LoginFormValidationSchema = yup.object({
  email: yup.string().email("Invalid email address").required("Required"),
  password: yup
    .string()
    .required("Required")
    .min(6, "Password must be at least 6 characters")
    .max(20, "Password must be at most 20 characters"),
});
