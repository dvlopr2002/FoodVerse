import { MdStars } from "react-icons/md";
import { BiSolidDoorOpen } from "react-icons/bi";
import { IMG_URL } from "../utils/constant";
const Restaurantcard = (props) => {
    const {
        name,
        areaName,
        cuisines,
        sla,
        avgRating,
        cloudinaryImageId,
        aggregatedDiscountInfoV3

    } = props?.restaData?.info;

    return (
        <div className="rsetaurant-card w-[100%] lg:w-[249px] ">
            <div className="lg:h-[166px] h-[200px] rounded-[15px] relative overflow-hidden shadow ">
                <img src={IMG_URL + cloudinaryImageId} alt="restaurant-card-img" className="object-cover w-full h-full" />
                <div className="image-overlay absolute w-full h-full top-0 flex items-end text-[white] p-[7px] text-[22px]  font-Bebas-Neue font-[800] tracking-[1px] ">
                    <span> {aggregatedDiscountInfoV3?.header}</span>  <span> {aggregatedDiscountInfoV3?.subHeader}</span>
                </div>
            </div>
            <div className="font-Gilroy-Bold font-[900] text-[18px]" >{name}</div>
            <div className="font-Gilroy-Regular flex text-[16px]  gap-2">
                <div className="flex items-center gap-x-1">
                    <MdStars className="text-emerald-700" />
                    <p>{avgRating}</p>
                </div>
                <span>{sla.slaString}</span>
            </div>
            <p className="font-Gilroy-Regular text-[14px] sm:text-[16px] text-[#878686] line-clamp-1">{cuisines.join(",")}</p>
            <p className="font-Gilroy-Regular text-[14px] sm:text-[16px] text-[#878686]">{areaName}</p>
        </div>)
}



export function isRestaOpen(Restaurantcard) {
    return (function (props) {
        return (<>
            <div className="relative  hover:scale-95 duration-500">
                <div className="text-white absolute top-0 right-0 lg:right-[10px] rounded-tr-2xl bg-black/55 p-2 z-50 font-semibold 
                  transition-transform duration-500 group-hover:translate-y-5 shadow flex items-center">
                    <div>Open</div>  <BiSolidDoorOpen />
                </div>

                <Restaurantcard {...props} />
            </div>
        </>)
    })
}





export default Restaurantcard;