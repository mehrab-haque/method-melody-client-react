import React from 'react'
import Banner from "./Banner";
import Featured from "./Featured";
import WhatWeTeach from "./WhatWeTeach";
import InstructorsList from "./InstructorsList";
import Upcoming from "./Upcoming";
import Insights from "./Insights";
import FAQ from "./FAQ";
import Contacts from "./Contacts";

const Body=props=>{
    return(
        <div className="body_section">
            <Banner/>
            <Featured/>
            <WhatWeTeach/>
            <InstructorsList/>
            <Upcoming/>
            <Insights/>
            <FAQ/>
            <Contacts/>
        </div>
    )
}

export default Body
