import Fooditems from "./Fooditems";
import { PiCaretDownBold } from "react-icons/pi";
import { RxCaretUp } from "react-icons/rx";
import "../App.css";

const FaqTop = (props) => {

    function handaleClick() {
        props.findIndexFaq();
    }

    const { title, itemCards } = props?.data?.card?.card;

    return (<>

        <div className="border-b-[13px]  sm:border-b-[17px] border-solid border-[#e3dfdf79] p-[14px] ">
            <div className="flex items-center justify-between " onClick={handaleClick}>
                <div className="text-[17px] sm:text-[18px] font-Gilroy-Bold " >{title} ({itemCards.length}) </div>
                {
                    props.showFaq === true ? (<div className="font-Gilroy-Bold text-[25px] sm:text-[27px] cursor-pointer"><RxCaretUp /></div>) :
                        (<div className="font-Gilroy-Bold sm:text-[18px] cursor-pointer"><PiCaretDownBold /></div>)
                }
            </div>
            <div className="faq-bottom">
                {
                    props.showFaq && itemCards.map((fooditems) => <Fooditems key={fooditems?.card?.info?.id} fooditemsData={fooditems} />)
                }
            </div>
        </div>

    </>)
}
export default FaqTop;