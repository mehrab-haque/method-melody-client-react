import React from 'react'

const InsightCard=props=>{
    return(
        <div className="card border-0 bg-transparent insights_section_card p-4 rounded-14">
            <div className="card-body text-center p-0">
                <h3 className="mb-0 insights_section_card_heading">{props.number}</h3>
                <h5 className="mb-0 insights_section_card_subheading">
                    <img src={props.icon} className="me-1" width="15"
                         height="15"/>
                    {props.title}</h5>
            </div>
        </div>
    )
}

export default InsightCard
