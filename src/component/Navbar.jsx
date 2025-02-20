import { useState, useContext } from "react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import Logo from "../assets/logo.webp";
import { FaUserCheck } from "react-icons/fa";
import { RiWifiOffLine } from "react-icons/ri";
import { FaWifi } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import useOnlineStatus from "../utils/useOnlinestatus";
import useScrollhandale from "../utils/useScrollhandale";
import { userConetext } from "../utils/userContext";
import "../App.css";

const Navbar = () => {
    const [showMenu, SetshowMenu] = useState(false);
    const status = useOnlineStatus();
    const scrollValue = useScrollhandale();

    const handaleClick = () => {
        showMenu === false ? SetshowMenu(true) : SetshowMenu(false)
    }

    const user = useContext(userConetext)

    const cartsItems = useSelector((store) => store.items.cart);

    return (
        <header>
            <nav
                className={`navbar  shadow  py-[6px] bg-[white] lg:py-[5px] absolute z-[10000] top-0 left-0 w-full  ease-in-out ${scrollValue ? "w-full fixed top-0 left-0 shadow z-[10000] bg-[white]" : ""}`}
            >

                <div className="max-w-[1360px] m-auto w-[100%]  px-[15px]">
                    <div className="nav-wrapper flex justify-between lg:items-center flex-col items-start lg:flex-row">
                        <div className="logo-part flex items-center justify-between w-[100%] lg:w-auto lg:flex-none ">
                            <div className="logo">
                                <figure>
                                    <img src={Logo} alt="Logo" className=" lg:h-[78px] lg:w-[78px] h-[68x] w-[68px] sm:h-[70px] sm:w-[70px]  rounded-[50px] " />
                                </figure>
                            </div>
                            <div className="toggler text-[25px] cursor-pointer lg:hidden" onClick={handaleClick}>
                                <FaBars />
                            </div>
                        </div>
                        <div className="manu-icon-wrapper flex lg:gap-x-[40px] gap-0 items-center">
                            <div className={`${showMenu ? "block" : "hidden"} lg:block pt-[6px] lg:pt-[0px]`}>
                                <ul className="flex lg:gap-x-[40px] gap-[0px] font-Gilroy-SemiBold lg:items-center text-[16px] sm:text-[18px] lg:text-[20px] tracking-[1px] capitalize flex-col lg:flex-row items-start">

                                    <li className="mt-1 lg:mt-0 text-gray-700 font-medium tracking-wide">
                                        {status === false ? <RiWifiOffLine className="text-[red]" /> : <FaWifi className="text-green-700" />}
                                    </li>

                                    <li className="mt-1 lg:mt-0 text-gray-700 hover:text-green-500 transition duration-300 ease-in-out font-medium tracking-wide">
                                        <Link to={"/"}>Home</Link>
                                    </li>

                                    <li className="mt-1 lg:mt-0 text-gray-700 hover:text-green-500 transition duration-300 ease-in-out font-medium tracking-wide">
                                        <Link to={"/about"}> About</Link>
                                    </li>
                                    <li className="mt-1 lg:mt-0 text-gray-700 hover:text-green-500 transition duration-300 ease-in-out font-medium tracking-wide">
                                        <Link to={"/grocery"}> Grocery</Link>
                                    </li>
                                    <li className="mt-1 lg:mt-0 text-gray-700 hover:text-green-500 transition duration-300 ease-in-out font-medium tracking-wide">
                                        <Link to={"/contact"}>Contact</Link>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <div className="mt-1 lg:mt-0 font-Gilroy-SemiBold font-medium tracking-wide flex gap-x-[15px] sm:gap-x-[20px] lg:gap-x-[40px] items-center absolute top-[30px] right-[60px]  lg:static">
                                    <div className="loginuser flex items-center gap-x-[5px] text-[16px] mt-[-5px] lg:mt-auto sm:text-[18px] lg:text-[20px] ">
                                        <div className="text-green-500"><FaUserCheck /></div>
                                        <div>{user.defaultUser}!</div>
                                    </div>
                                    <Link to={"/cartpage"}>
                                        <div className="cart-part" >
                                            <div className="font-Gilroy-SemiBold items-center text-[20px] relative">
                                                <span><FaCartShopping /></span>
                                                <p className="bg-green-500 text-white  text-[14px] pt-[2px] pb-[0px] px-[7px] sm:pt-[3px] sm:pb-[1px] sm:px-[9px] rounded-[50px] absolute  top-[-16px] right-[-10px] ">{cartsItems.length}</p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </nav >
        </header>)
}
export default Navbar