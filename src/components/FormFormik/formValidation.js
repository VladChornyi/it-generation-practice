import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Too Short!")
    .max(15, "Too Long!name")
    .required("Required"),
  lastName: Yup.string()
    .min(5, "Too Short!")
    .max(15, "Too Long!last-name")
    .required("Required"),
  phone: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
});
