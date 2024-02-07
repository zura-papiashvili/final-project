import * as yup from "yup";

export const productFormValidationSchema = yup.object({
  name: yup.string().required("Name is required").min(3, "Name is too short"),
  description: yup
    .string()
    .required("Description is required")
    .min(10, "Description is too short"),
  brand: yup
    .string()
    .required("Brand is required")
    .min(3, "Brand is too short"),

  category: yup
    .string()
    .required("Category is required")
    .min(3, "Category is too short"),

  price: yup.number().required("Price is required").min(1, "Price is too low"),
});
