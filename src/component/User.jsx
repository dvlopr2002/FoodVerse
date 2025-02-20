import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router";
import mycv from "../assets/cv.pdf"
import profileimg from "../assets/profile.png";
import "../App.css";

class Contact extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user1: {
                name: "XXXXXXX",
                login: "XXXXXXX",
                avatar: profileimg
            }
        }
    }

    async componentDidMount() {
        Aos.init();
        const userdata = await fetch("https://api.github.com/users/dvlopr2002");
        const jdata = await userdata.json();
        this.setState({
            user1: jdata
        })
    }

    render() {
        return (
            <div className="user wrapper h-[100vh] pt-[70px]  sm:pt-[88px]  flex gap-[30px] flex-col md:flex-row items-center justify-center">
                <div className="min-w-[300px] sm:w-[60%] h-[250px] md:h-[320px] md:w-[40%] overflow-hidden   shadow border-grey border-[15px] border-[#fbf9f9] rounded" data-aos="zoom-in" data-aos-duration="900" >
                    <img
                        src={this.state.user1.avatar_url ? this.state.user1.avatar_url : this.state.user1.avatar}
                        className="h-full w-full object-cover"
                        alt="User Avatar"
                    />

                </div>

                <div className="w-[100%] md:w-[50%]  md:p-[20px] order-[-1] md:order-1">
                    <h1 className="text-[28px] lg:text-[33px] leading-[40px] md:leading-[43px] font-Gilroy-Bold lg:leading-[45px]" data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-easing="ease-out-cubic"
                        data-aos-delay="100"
                    >Hii <br /> I'am <span className="text-blue-500">{this.state.user1.name}</span> <br /> Front-End Developer </h1>

                    <Link to={mycv} download={mycv} target="_blank">
                        <button
                            className="bg-blue-400 md:text-[16px] lg:text-[18px] rounded hover:bg-blue-300 duration-200 cursor-pointer shadow font-Gilroy-SemiBold py-[9px] px-[15px] text-white tracking-[1] mt-[15px] flex items-center gap-x-[10px]"
                            data-aos="fade-up"
                            data-aos-duration="600"
                            data-aos-easing="ease-out-cubic"
                            data-aos-delay="200"
                        >
                            <div>Download CV</div>
                            <IoCloudDownloadOutline />
                        </button>
                    </Link>

                    <div className="social-media-icons font-Gilroy-Medium mt-[27px] sm:mt-[35px]" data-aos="fade-up"
                        data-aos-duration="600"
                        data-aos-easing="ease-out-cubic"
                        data-aos-delay="300">
                        <Link to={"https://www.linkedin.com/in/tamal-mandal-38ab58194/"} target="_blank">
                            <button className="p-[10px] sm:p-[13px] bg-blue-400 text-white rounded-full mr-[8px] shadow  hover:bg-blue-300 duration-200 cursor-pointer"><FaLinkedinIn /></button>
                        </Link>
                        <Link to={"https://github.com/"} target="_blank">
                            <button className="p-[10px] sm:p-[13px]  bg-blue-400 text-white rounded-full  hover:bg-blue-300 duration-200 cursor-pointer"><SiGithub /></button>
                        </Link>
                    </div>

                </div>
            </div >)

    }
}
export default Contact;