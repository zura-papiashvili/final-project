import React, { useState } from "react";
import { Button, FormContainer } from "../../atoms";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../atoms";
import { yupResolver } from "@hookform/resolvers/yup";
import { productFormValidationSchema } from "./ProductFormValidation";
import { useTranslation } from "react-i18next";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { saveProduct } from "../../../redux";
import { useNavigate } from "react-router-dom";

export const ProductForm = () => {
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(productFormValidationSchema),
  });
  const [image, setImage] = useState("");
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    dispatch(
      saveProduct({
        ...data,
        image,
      })
        .unwrap()
        .then(() => {
          navigate("/products");
        })
        .catch((error) => {
          console.log(error.message);
        })
    );
  };
  return (
    <FormContainer>
      <Controller
        name="name"
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="Name"
              helperText={errors.name?.message}
              error={Boolean(errors.name)}
            />
          );
        }}
      />
      <Controller
        name="description"
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="Description"
              helperText={errors.description?.message}
              error={Boolean(errors.description)}
            />
          );
        }}
      />

      <Controller
        name="brand"
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="Brand"
              helperText={errors.brand?.message}
              error={Boolean(errors.brand)}
            />
          );
        }}
      />
      <Controller
        name="category"
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="Category"
              helperText={errors.category?.message}
              error={Boolean(errors.category)}
            />
          );
        }}
      />
      <Controller
        name="price"
        control={control}
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="Price"
              helperText={errors.price?.message}
              error={Boolean(errors.price)}
            />
          );
        }}
      />
      <FileBase64
        type="file"
        multiple={false}
        onDone={({ base64 }) => {
          setImage(base64);
        }}
      />
      <Button onClick={handleSubmit(onSubmit)} disabled={!isValid}>
        {t("save_button")}
      </Button>
    </FormContainer>
  );
};
