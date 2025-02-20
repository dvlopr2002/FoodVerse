// React & Hooks
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Mail, User, MessageSquare } from "lucide-react";
import { Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import { contactValidation } from "../utils/Contactvalidation";
import useOnlineStatus from "../utils/useOnlinestatus";
import contactImg from "../assets/contact.webp";
import "../App.css";

const initialValues = {
    name: "",
    email: "",
    message: ""
};

const Contact = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (<p className="font-Gilroy-Bold text-[23px] text-center  md:text-[27px] lg:text-[30px] text-[red] mt-[250px] pl-[0px]">You are offline. Check your internet connection and try again.</p>)
    }
    return (
        <>
            <section className="contact h-[100vh]  bg-blue-50">
                <div className="max-w-[830px] m-auto w-[100%] px-[15px]">
                    <div className="flex justify-center items-center h-[100vh]">
                        <div className="flex flex-col justify-center md:flex-row  w-full   contact-wrapper pt-[88px]" data-aos="zoom-in" data-aos-duration="600">
                            <div className="contact-image-wrapper overflow-hidden w-[100%] md:w-[50%] ">
                                <img
                                    src={contactImg}
                                    className="h-full w-full object-cover rounded-b-2xl md:rounded-b-[0] md:rounded-tl-2xl md:rounded-bl-2xl"
                                    alt="contact-img"
                                />
                            </div>
                            <div className="contact-info-wrapper w-[100%] md:w-[50%] bg-white px-[18px] pt-[25px] pb-[30px] sm:p-[20px]  md:rounded-br-2xl rounded-tl-2xl md:rounded-tl-[0] rounded-tr-2xl order-[-1] md:order-1 shadow">
                                <h1 className="text-center mb-[8px] font-Gilroy-Bold text-[23px] sm:text-[25px]">Contact Us</h1>
                                <Formik
                                    initialValues={initialValues}
                                    validationSchema={contactValidation}
                                    onSubmit={(values) => {
                                        Swal.fire({
                                            title: "Submitted Successfully!",
                                            html: `
                                                <b>Name:</b> ${values.name} <br>
                                                <b>Email:</b> ${values.email} <br>
                                                <b>Message:</b> ${values.message}
                                            `,
                                            icon: "success",
                                            confirmButtonText: "OK",
                                            confirmButtonColor: "#3085d6",
                                        });
                                    }}
                                >
                                    {({ errors }) => (
                                        <Form>
                                            <div className="relative w-full">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                                <Field
                                                    placeholder="Please enter your name"
                                                    name="name"

                                                    className="block w-full border border-gray-300 px-4 py-2 pl-10 rounded-md
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   placeholder-gray-500 text-[15px]"
                                                />
                                            </div>

                                            <p className="text-[red] font-Gilroy-Medium my-[10px]">{errors.name && errors.name}</p>

                                            <div className="relative w-full">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                                <Field
                                                    placeholder="Please enter your email"
                                                    name="email"

                                                    className="block w-full border border-gray-300 px-4 py-2 pl-10 rounded-md
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   placeholder-gray-500 text-[15px]"
                                                />
                                            </div>

                                            <p className="text-[red] font-Gilroy-Medium my-[10px] ">{errors.email && errors.email}</p>

                                            <div className="relative w-full">
                                                <MessageSquare className="absolute left-3 top-4 text-gray-500" size={18} />
                                                <Field
                                                    as="textarea"
                                                    name="message"

                                                    className="block w-full border border-gray-300 px-4 py-2 pl-10 min-h-[150px]  sm:min-h-[180px] rounded-md
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                   placeholder-gray-500 mb-3  text-[15px]"
                                                    placeholder="Enter message"
                                                />
                                            </div>

                                            <p className="text-[red] font-Gilroy-Medium my-[10px]">{errors.message && errors.message}</p>
                                            <button
                                                type="submit"
                                                className="bg-blue-500 text-white text-[15px] duration-200 rounded hover:bg-blue-600 cursor-pointer font-Gilroy-SemiBold capitalize block m-auto py-[8px] px-[25px] md:py-[8px] md:px-[30px] lg:py-[10px] lg:px-[40px] shadow "
                                            >
                                                Submit
                                            </button>
                                        </Form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
