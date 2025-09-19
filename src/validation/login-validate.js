import * as yup from "yup";

export const contactValidation = yup.object().shape({
  name: yup.string().required("name is requied"),
  email: yup.string().required("email is required"),
  subject: yup.string().required("subject is required"),
  message: yup.string().required("message is required"),
});

export const signFormValidation = yup.object().shape({
  name: yup.string().required("name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("email is required"),
  password: yup
    .string()
    .min(6, "password should be at least 6 characters")
    .required("password is required"),
  contact: yup
    .string()
    .matches(/^[0-9]{10}$/, "contact must be 10 digits")
    .required("contact is required"),
});

export const bookingValidation = yup.object().shape({
  e_mail: yup
    .string()
    .email("Enter a valid email")
    .required("email is required"),
  room_type: yup.string().required("room_type is required"),
  check_in: yup.string().required("check_in is required"),
  check_out: yup.string().required("check_out is required"),
  guests: yup.string().required("guests is required"),
});
