import "../App.css";
import { emptyCart, deleteCart } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineStar } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import useOnlineStatus from "../utils/useOnlinestatus";
import { useEffect } from "react";
import { IMG_URL } from "../utils/constant";

const ShowCartIems = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    const allCartItems = useSelector((store) => store.items.cart);

    const dispatch = useDispatch();
    function clearCartItems() {
        useDispatch(dispatch(emptyCart()))
    }

    const dispatch2 = useDispatch();
    function deleteCartItems(id) {
        dispatch2(deleteCart(id));
    }

    const status = useOnlineStatus();
    if (status === false) {
        return (<p className="font-Gilroy-Bold text-[26px] text-center  md:text-[27px] lg:text-[30px] text-[red] mt-[250px] pl-[0px]">You are offline. Check your internet connection and try again.</p>)
    }

    return (
        <section className="cart-items pb-[40px] pt-[110px] sm:pb-[40px] md:pt-[120px] md:pb-[60px]">
            <div className="max-w-[830px] m-auto w-[100%] px-[15px]">
                <div className=" font-Gilroy-Regular">
                    <div className="flex flex-col items-center pb-[10px] sm:pb-[20px]">
                        <h1 className="text-[23px] md:text-[26px] lg:text-[28px] font-Gilroy-Bold mb-[18px] sm:mb-[15px]" data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-easing="ease-out-cubic"
                        >
                            Cart
                        </h1>
                        <button className="capitalize bg-white font-Gilroy-Regular font-[600] tracking-[1px] rounded-[5px] shadow py-[8px] px-[20px] sm:py-[6px] sm:px-[30px] md:py-[9px] md:px-[40px] text-[14px] sm:text-[auto] cursor-pointer hover:scale-95 duration-200 text-red-500 block border border-red-500" onClick={clearCartItems} data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-easing="ease-out-cubic" data-aos-delay="100">
                            Clear Cart
                        </button>
                    </div>

                    {
                        allCartItems.length === 0 ?
                            <p className="text-gray-500 text-lg font-Gilroy-Medium text-center mt-4 flex flex-col items-center">
                                🛒 Your cart is empty! <br /> Add some items to start shopping. 😊
                            </p>
                            : (
                                allCartItems.map((data) =>
                                (< div className="cart-items-wrapper flex items-center justify-between py-[18px] sm:py-[18px]  border-b-[1px] border-[#d9d9d9]" key={data.id} >
                                    <div className="left-part w-[75%]">
                                        <div className="font-Gilroy-Bold text-[#5d5c5c] text-[16px] sm:text-[18px]">{data.name}</div>

                                        <div className="font-Gilroy-SemiBold text-[#3d3c3c] text-[17px] sm:text-[18px]  mt-[4px] sm:mt-[5px]">₹{(data.price / 100) ? data.price / 100 : data.defaultPrice / 100}</div>

                                        <div className="flex items-center gap-x-[2px] sm:gap-x-[2px] mt-[4px] sm:mt-[5px]">
                                            {data.ratings?.aggregatedRating?.rating ? <div className="text-green-800"><MdOutlineStar /></div> : ""}

                                            <div className="font-Gilroy-Bold text-[#3d3c3c] text-[14px] sm:text-[15px]">{data.ratings?.aggregatedRating?.rating ? data.ratings?.aggregatedRating?.rating : null}</div>
                                        </div>

                                        <p className="font-Gilroy-Medium text-[14px] sm:text-[15px] text-[#636363] mt-[4px] sm:mt-[5px] ">{data.description}</p>
                                    </div>

                                    <div className="right-part  max-w-[150px]  h-[144px]  relative">
                                        <img src={IMG_URL + data.imageId} alt="menu-img/cart-img" className="h-[100%] w-[100%] object-cover" />
                                        <button className="capitalize bg-white font-Gilroy-Regular font-[600] tracking-[1px]  rounded-[5px]  shadow py-[5px] px-[25px] sm:py-[6px] sm:px-[30px] md:py-[7px] md:px-[40px] absolute bottom-[-10px] left-[50%] translate-x-[-50%] text-[14px] sm:text-[auto]  cursor-pointer hover:scale-95 duration-200 text-[red]" onClick={() => deleteCartItems(data.id)}>Delete-</button>
                                    </div>
                                </div>))
                            )

                    }

                </div>
            </div>
        </section >
    )
}
export default ShowCartIems 