import React from 'react'

const InstructorCard=props=>{
    return(
        <div className="card our_instructors_section_card p-4 rounded-14">
            <div className="our_instructors_section_card_img_section rounded-circle">
                <img src={props.image}
                     className="mb-2 our_instructors_section_card_img"/>
                    <span className="bi bi-eye see_icon"></span>
            </div>
            <div className="card-body text-center">
                <h4 className="our_instructors_section_card_heading">{props.name}</h4>
                <p className="our_instructors_section_card_subheading">{props.title}</p>
            </div>
        </div>
    )
}

export default InstructorCard
