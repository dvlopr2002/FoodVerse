import { useDispatch } from "react-redux";
import { MdOutlineStar } from "react-icons/md";
import { addCart } from "../utils/cartSlice";
import { IMG_URL } from "../utils/constant";
import "../App.css";


const Fooditems = (props) => {

    const { name, price, imageId,
        defaultPrice, ratings, description } = props?.fooditemsData?.card?.info;

    const { info } = props?.fooditemsData?.card

    const dispatch = useDispatch()

    function handaleClick(info) {
        dispatch(addCart(info))
    }

    return (<>
        {<div className="flex items-center justify-between py-[18px] sm:py-[18px]  border-b-[1px] border-[#d9d9d9]">

            <div className="w-[75%]" >
                <div className="font-Gilroy-Bold text-[#5d5c5c] text-[16px] sm:text-[18px]">{name}</div>
                <div className="font-Gilroy-SemiBold text-[#3d3c3c] text-[17px] sm:text-[18px]  mt-[4px] sm:mt-[5px]">₹{(price / 100) ? price / 100 : defaultPrice / 100}</div>
                <div className="flex items-center gap-x-[2px] sm:gap-x-[2px] mt-[4px] sm:mt-[5px]">
                    {ratings?.aggregatedRating?.rating ? <div className="text-green-800"><MdOutlineStar /></div> : ""}

                    <div className="font-Gilroy-Bold text-[#3d3c3c] text-[14px] sm:text-[15px]">{ratings?.aggregatedRating?.rating ? ratings?.aggregatedRating?.rating : null}</div>
                </div>
                <p className="font-Gilroy-Medium text-[14px] sm:text-[15px] text-[#636363] mt-[4px] sm:mt-[5px] ">{description}</p>
            </div>

            <figure className="w-[140px] sm:w-[156px] h-[144px] relative ">
                <img src={IMG_URL + imageId} alt="menu-img/cart-img" className="h-[100%] w-[100%] object-cover" />
                <button className="capitalize bg-white font-Gilroy-Regular font-[600] tracking-[1px]  rounded-[5px]  shadow py-[5px] px-[25px] sm:py-[6px] sm:px-[30px] md:py-[7px] md:px-[40px] absolute bottom-[-10px] left-[50%] translate-x-[-50%] text-[14px] sm:text-[auto]  cursor-pointer hover:scale-95 duration-200 text-green-600" onClick={() => handaleClick(info)}>Add+</button>
            </figure>
        </div>}
    </>)
}
export default Fooditems;