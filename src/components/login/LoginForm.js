import React from "react";
import { LoginFormValidationSchema } from "./LoginFormValidation";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormContainer, Input, Button } from "../atoms";

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(LoginFormValidationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <FormContainer>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
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
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="Password"
              error={Boolean(errors.password)}
              helperText={errors.password?.message}
            />
          );
        }}
      />

      <Button onClick={handleSubmit(onSubmit)} disabled={false}>
        Login
      </Button>
    </FormContainer>
  );
};
