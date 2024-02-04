import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormValidationSchema } from "./SignUpFormValidation";
import { Button, FormContainer, Input } from "../atoms";

export const SignUpForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(signUpFormValidationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <FormContainer>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onchange } = field;
          return (
            <Input
              name={name}
              onChange={onchange}
              label="First Name"
              error={Boolean(errors.firstName)}
              helperText={errors.firstName?.message}
            />
          );
        }}
      />
      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onchange } = field;
          return (
            <Input
              name={name}
              onChange={onchange}
              label="Last Name"
              error={Boolean(errors.lastName)}
              helperText={errors.lastName?.message}
            />
          );
        }}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onchange } = field;
          return (
            <Input
              name={name}
              onChange={onchange}
              label="Email"
              error={Boolean(errors.email)}
              helperText={errors.email?.message}
            />
          );
        }}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onchange } = field;
          return (
            <Input
              name={name}
              onChange={onchange}
              label="Password"
              type="password"
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
          );
        }}
      />
      <Button disabled={!isValid} onClick={handleSubmit(onSubmit)}>
        Sign Up
      </Button>
    </FormContainer>
  );
};
