import { useRouteError } from "react-router";
import "../App.css"
const Error = () => {
    const error = useRouteError();

    return (<div className="max-w-[1125px] m-auto w-[100%]  px-[15px] py-[50px] lg:py-[100px]">
        <div>
            <h1 className="font-Gilroy-Bold text-[23px] text-center md:text-left md:text-[27px] lg:text-[30px] text-[red]">Oops! An error occurred. Refresh the page and try again.</h1>
            <div className="flex items-center gap-x-[10px]  pt-[5px] ">
                <div className="font-Gilroy-Medium text-[20px] text-[red] text-center md:text-right">{error?.status} :</div>
                <div className="font-Gilroy-Medium text-[20px] text-[red] text-center md:text-right">{error?.statusText}</div>
            </div>
        </div>
    </div>)
}
export default Error;