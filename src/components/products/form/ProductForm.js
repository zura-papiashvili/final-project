import React, { useEffect, useState } from "react";
import { Button, FormContainer } from "../../atoms";
import { Controller, useForm } from "react-hook-form";
import { Input } from "../../atoms";
import { yupResolver } from "@hookform/resolvers/yup";
import { productFormValidationSchema } from "./ProductFormValidation";
import { useTranslation } from "react-i18next";
import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";
import { saveProduct, setSelectedProduct } from "../../../redux";
import { useNavigate } from "react-router-dom";
import { useProduct } from "../../../hooks";

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
  const { selectedProduct } = useProduct();
  useEffect(() => {
    if (selectedProduct) {
      setImage(selectedProduct?.image);
    }
  }, [selectedProduct]);

  const onSubmit = async (data) => {
    try {
      await dispatch(
        saveProduct({
          product: { ...data, image },
          productId: selectedProduct?._id,
        })
      ).unwrap();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect(() => {
  //   console.log("1");
  //   dispatch(setSelectedProduct(null));
  // }, []);

  return (
    <FormContainer>
      <Controller
        name="name"
        control={control}
        defaultValue={selectedProduct?.name || ""}
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label={t("name")}
              value={value}
              helperText={errors.name?.message}
              error={Boolean(errors.name)}
            />
          );
        }}
      />
      <Controller
        name="description"
        control={control}
        defaultValue={selectedProduct?.description || ""}
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label={t("description")}
              value={value}
              helperText={errors.description?.message}
              error={Boolean(errors.description)}
            />
          );
        }}
      />

      <Controller
        name="brand"
        control={control}
        defaultValue={selectedProduct?.brand || ""}
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label={t("brand")}
              value={value}
              helperText={errors.brand?.message}
              error={Boolean(errors.brand)}
            />
          );
        }}
      />
      <Controller
        name="category"
        control={control}
        defaultValue={selectedProduct?.category || ""}
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label={t("category")}
              value={value}
              helperText={errors.category?.message}
              error={Boolean(errors.category)}
            />
          );
        }}
      />
      <Controller
        name="price"
        control={control}
        defaultValue={selectedProduct?.price || ""}
        render={({ field }) => {
          const { name, onChange, value } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label={t("price")}
              value={value}
              helperText={errors.price?.message}
              error={Boolean(errors.price)}
            />
          );
        }}
      />
      <div style={{ marginTop: "20px" }}>
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => {
            setImage(base64);
          }}
        />
      </div>

      <Button onClick={handleSubmit(onSubmit)} disabled={!isValid}>
        {t("save_button")}
      </Button>
    </FormContainer>
  );
};
