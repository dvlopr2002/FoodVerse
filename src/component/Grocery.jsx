import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import useOnlineStatus from "../utils/useOnlinestatus";
import groceryimg from "../assets/grocery.webp";
import "../App.css";

const Grocery = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (<p className="font-Gilroy-Bold text-[23px] text-center  md:text-[27px] lg:text-[30px] text-[red] mt-[250px] pl-[0px]">You are offline. Check your internet connection and try again.</p>)
    }

    return (<section className="grocery h-[100vh] bg-amber-50 overflow-x-hidden">
        <div className="max-w-[1160px] m-auto w-[100%] px-[15px] overflow-x-hidden">
            <div className="grocery-wrapper h-[100vh]  flex justify-center  items-center">
                <div className="flex lg:flex-row flex-col gap-[25px] justify-center items-center pt-[88px]">

                    <figure className="grocery-left hidden sm:block max-w-[35%] overflow-hidden shadow" data-aos="fade-right" data-aos-duration="500" >
                        <img
                            src={groceryimg}
                            alt="grocery-img"
                            className="h-full w-full object-cover"
                        />
                    </figure>

                    <div className="grocerry-right w-[100%] lg:w-[60%] order-[-1] lg:order-1" data-aos="fade-left" data-aos-duration="500">
                        <h1 className=" text-[25px] lg:text-[27px] font-Gilroy-Bold text-center  contact-heading" data-aos="zoom-in" data-aos-duration="700" >Lazy loading</h1>
                        <p className="leading-[28px] text:[15px] md:text-[16px] font-Poppins mt-[10px] first-letter:text-amber-400 first-letter:text-[40px]" data-aos="fade-up">In our application, the Grocery component is a large module containing multiple subcomponents, similar to how the Body component includes subcomponents like <b> SimmerUI, Menu, and RestaurantCard</b>. The grocery business consists of numerous components, making it a small app within our React application.

                            As our application grows, we need to logically distribute it so that the Grocery component and all its subcomponents are bundled separately. Instead of importing Grocery directly <b>("import Grocery from "./component/Grocery")</b> , we will implement lazy loading,<span className="hidden exsm:block" > ensuring that when our app initially loads, only the home page is loaded. The Grocery module will not be loaded at this stage. Instead, it will be loaded dynamically only when the user navigates to the Grocery page.

                                This technique is known as <b> lazy loading,  dynamic binding, code splitting, and chunking.</b> It improves performance by reducing the initial load time and ensuring that only the necessary code is loaded when required.</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>)
}
export default Grocery