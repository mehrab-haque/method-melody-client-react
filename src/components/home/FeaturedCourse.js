import React from 'react'
import cartLogo from '../../assets/images/cart.svg'

const FeaturedCourse=props=>{
    return(
        <div className="card featured_courses_section_card p-4 rounded-14">
            <div className="position-relative mb-2">
                <img src={props.logo} className="card-img-top shadow-sm rounded-14"
                     alt="..."/>
                    <div className="featured_courses_section_card_top">
                        <h3 className="mb-0">{props.title}</h3>
                        <h5 className="mb-0">{props.subtitle}</h5>
                    </div>
            </div>
            <div className="card-body p-0">
                <h5 className="featured_courses_section_card_title">{props.description}</h5>
                <div className="trainer d-flex align-items-center gap-2 mb-2">
                    <img src={props.instructor_image} width="30" height="30"/>
                    {props.instructor_name}
                </div>
                <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="present_fee">{props.price}</span>
                    <span className="previous_fee">{props.x_price}</span>
                </div>
                <a href="#" className="btn featured_courses_section_card_btn btn_focus w-100">
                    <img src={cartLogo}/>
                        Buy This Course</a>
            </div>
        </div>
    )
}

export default FeaturedCourse
