const Footer = () => {
    return (<footer className="bg-white border-t-[1px] border-[#8080803d] shadow">
        <div className="max-w-[1360px] m-auto w-[100%] px-[15px]">
            <p className="text-center font-Gilroy-Medium text-[15px]  md:text-[16px] lg:text-[18px]  text-gray-600 text-sm py-4">
                © {new Date().getFullYear()} Foodverse by Tamal. All rights reserved.
            </p>
        </div>
    </footer>)
}
export default Footer;