import { useState, useEffect } from "react"
function useOnlineStatus() {
    const [status, Setstatus] = useState(true)

    useEffect(() => {
        window.addEventListener("online", () => {
            Setstatus(true)
        });
        window.addEventListener("offline", () => {
            Setstatus(false)
        });
    }, [])

    return status;
}
export default useOnlineStatus;