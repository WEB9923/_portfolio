import * as yup from "yup";

export const EmailSchema = yup.object().shape({
   from_name: yup.string().min(2,"name field must contain at least 2 characters").required("name field is required!"),
   from_email: yup.string().email("enter valid email address!").required("email field is required"),
   message: yup.string().min(10,"message field must contain at least 10 characters").required("message field is required!")
}).required();
