import { useState, useEffect } from "react";
function useMenu(resId) {
    const [menu, SetMenu] = useState([]);

    useEffect(() => {
        menuInfo();
    }, [])

    const menuInfo = async () => {
        const menuData = await fetch("https://proxy.cors.sh/https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.5743545&lng=88.3628734&restaurantId=" + resId + "&submitAction=ENTER");
        const jdata = await menuData.json();
        SetMenu(jdata?.data?.cards);
    }

    return menu
}

export default useMenu;