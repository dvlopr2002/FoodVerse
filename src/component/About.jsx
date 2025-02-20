import React from "react"
import Contact from "./User"
class About extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (<section className="bg-blue-100 h-[100vh]">
            <div className="max-w-[830px] m-auto w-[100%] px-[15px]">
                <Contact />
            </div>
        </section>)
    }
}
export default About