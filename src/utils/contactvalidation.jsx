import * as Yup from "yup";

export const contactValidation = Yup.object({
    name: Yup.string()
        .min(5, "Name must be at least 5 characters long")
        .required("Please enter your name"),
    email: Yup.string()
        .email("Enter a valid email")
        .required("Please enter your email"),
    message: Yup.string()
        .max(50, "Message cannot exceed 50 characters.")
        .required("Please enter a message"),
});

