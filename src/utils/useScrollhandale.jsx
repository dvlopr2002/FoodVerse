import { useState, useEffect } from "react";
function useScrollhandale() {
    const [active, SetActive] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                SetActive(true)
            }
            else {
                SetActive(false);
            }
        })
    }, []);



    return active
}
export default useScrollhandale;