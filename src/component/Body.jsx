import { useEffect, useState } from "react";
import { Link } from "react-router";
import Aos from "aos";
import "aos/dist/aos.css";
import Restaurantcard, { isRestaOpen } from "./Restaurantcard";
import Restasimmer from "./Restasimmer";
import useOnlineStatus from "../utils/useOnlinestatus";
import "../App.css";


const Body = () => {
    const [restaurants, Setrestaurants] = useState([]);
    const [filterRestaurants, SetFilteredResaurants] = useState([]);// 20 card are store inside main
    const [inputRestaurants, SetInputRestaurants] = useState("");

    useEffect(() => {
        Aos.init()
        restaurantCardInfo();
    }, [])

    const restaurantCardInfo = async () => {
        const restraInfo = await fetch("https://proxy.cors.sh/https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=22.5743545&lng=88.3628734&carousel=true&third_party_vendor=1");
        const jdata = await restraInfo.json();
        Setrestaurants(jdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants) // 20
        SetFilteredResaurants(jdata?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //20
    }

    // restaOpenorNot
    const OpenResta = isRestaOpen(Restaurantcard);

    // check online or offline
    const status = useOnlineStatus();

    if (status === false) {
        return (<p className="font-Gilroy-Bold text-[23px] text-center  md:text-[27px] lg:text-[30px] text-[red] mt-[250px] pl-[0px]">You are offline. Check your internet connection and try again.</p>)
    }

    if (restaurants.length === 0) {
        return <Restasimmer />
    }

    return (<main>
        <section className="restaurant pb-[30px] pt-[105px] sm:pb-[65px] sm:pt-[130px]">
            <div className="max-w-[1125px] m-auto w-[100%]  font-[1000] px-[15px]">
                <h1 className="text-[23px] md:text-[26px] lg:text-[28px] font-Gilroy-Bold" data-aos="fade-right"
                    data-aos-anchor-placement="bottom-bottom" data-aos-duration="600">Restaurants with online food delivery in Kolkata</h1>

                {/* search porsan */}
                <div className=" flex items-center  justify-center flex-wrap md:flex-nowrap  lg:justify-between gap-[20px]  font-Gilroy-Regular py-[15px] sm:py-[25px] ">
                    <div className="sm:w-[30%] md:w-[70%] lg:w-[33.33%] flex" >
                        <button className=" border border-[grey] px-[10px] py-[6px] md:p-[10px] rounded-[5px] capitalize text-[black] tracking-[1px] flex-grow hover:bg-[#fcfbfba6]  cursor-pointer hover:scale-95 duration-200" onClick={() => {
                            SetFilteredResaurants(restaurants.filter((filterresta) => filterresta.info.avgRating >= 4.5))

                        }} >Top Restaurent</button>
                    </div>
                    <div className="w-[100%] lg:w-[33.33%] flex gap-x-[10px]" >
                        <input type="text" placeholder="Enter restaurent name" className=" border border-[grey] rounded-[5px] flex-grow px-[10px] tracking-[1px] py-[6px] md:p-[10px] placeholder:text-[14px] sm:placeholder:text-[15px] placeholder-[#979595]" value={inputRestaurants} onChange={(evnt) => SetInputRestaurants(evnt.target.value)} />
                        <button className=" border border-[grey] px-[10px] py-[6px] md:p-[10px] rounded-[5px] capitalize text-[black] tracking-[1px] hover:bg-[#fcfbfba6]  cursor-pointer hover:scale-95 duration-200" onClick={() => {

                            SetFilteredResaurants(restaurants.filter((filterresta) => filterresta.info.name.toLowerCase().includes(inputRestaurants.toLowerCase())));
                            SetInputRestaurants("")
                        }} >click!</button>
                    </div>
                </div>

                <div className="restaurant-card-wrapper grid-cols-1 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[20px] gap-y-[20px]">
                    {
                        filterRestaurants.length === 0 ? (
                            <p className="font-Gilroy-Regular tracking-[1px] text-[red]">No matching restaurants found.</p>
                        ) : (
                            filterRestaurants.map((restaInfo) => (
                                <Link key={restaInfo.info.id} to={"/restaurant/" + restaInfo.info.id}>
                                    {
                                        restaInfo.info.isOpen === true ? <OpenResta restaData={restaInfo} /> : < Restaurantcard restaData={restaInfo} />
                                    }
                                </Link>
                            ))
                        )
                    }
                </div>

            </div>
        </section>
    </main >)
}
export default Body