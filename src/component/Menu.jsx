import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { PiHandsPrayingThin } from "react-icons/pi";
import { MdStars } from "react-icons/md";
import { useParams } from "react-router";
import useMenu from "../utils/useMenu";
import FaqTop from "./Faqtop";
import MenuSimmer from "./Menusimmer";
import "../App.css";

const Menu = () => {
    const [faqIndex, SetFaqIndex] = useState(null);
    useEffect(() => {
        Aos.init();
    }, [])
    function findIndexFaq(idx) {
        SetFaqIndex(idx)
    }
    const params = useParams();
    const menu = useMenu(params.resId);

    if (menu.length === 0) {
        return <MenuSimmer />
    }

    const { name, avgRatingString, totalRatingsString, costForTwoMessage, cuisines, areaName, sla } = menu[2]?.card?.card?.info;

    const catagory = menu[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((data) => data?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <section className="pb-[40px] pt-[105px] sm:pb-[40px] md:pt-[120px] md:pb-[45px]">
            <div className="max-w-[830px] m-auto w-[100%] px-[15px]" >
                <h1 className="text-[23px] md:text-[26px] lg:text-[28px] font-Gilroy-Bold mb-[18px]" data-aos="fade-right"
                    data-aos-anchor-placement="center-center" data-aos-duration="600" >{name}</h1>
                <div className="menu-wrapper-box border border-[#e1e1e1] p-[25px]  rounded-3xl" data-aos="zoom-in" data-aos-duration="600" >
                    <div className="flex items-center font-Gilroy-Bold text-[17px] sm:text-[18px] gap-x-[10px]">
                        <div className="flex items-center gap-x-[2px]">
                            <div>
                                <MdStars className="text-emerald-700" />
                            </div>
                            <div>{avgRatingString}</div>
                            <div className="ml-[3px]">{totalRatingsString}</div>
                        </div>
                        <div>{costForTwoMessage}</div>
                    </div>
                    <div className="font-Gilroy-Medium font-[800]  mt-[6px]  text-[14px] sm:text-[15px] text-[#ee5716]">{cuisines.join(",")}</div>
                    <div className="font-Gilroy-Bold font-[800] mt-[6px]  text-[14px] sm:text-[15px] " >Outlet <span className="ml-[5px] text-[13px] font-Gilroy-Regular text-[grey]  font-[660]" >{areaName}</span> </div>
                    <div className="font-Gilroy-Medium font-[800] mt-[6px] text-[14px] sm :text-[15px]" >{sla?.minDeliveryTime}-{sla?.maxDeliveryTime} mins</div>
                </div>

                <div className=" mt-[35px] rounded-[5px]  font-Gilroy-Bold bg-[#f7f6f636] text:[17px] sm:text-[18x] border border-[#e1e1e1] tracking-[1px] py-[10px] flex items-center justify-center gap-x-[10px]">
                    <div><PiHandsPrayingThin /></div>
                    <div className="text-[14px] sm:text-[15px]"> Menu</div>
                    <div><PiHandsPrayingThin /></div>
                </div>

                <div className="faq pt-[28px]  lg:pt-[35px]">
                    {
                        catagory.map((faqtopData, index) => <FaqTop
                            key={faqtopData.card.card.title}
                            data={faqtopData}
                            showFaq={index === faqIndex && true}
                            findIndexFaq={() => findIndexFaq(index)}
                        />)
                    }
                </div>
            </div>
        </section>
    )
}
export default Menu;