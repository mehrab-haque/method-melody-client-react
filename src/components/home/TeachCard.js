import React from 'react'

const TeachCard=props=>{
    return(
        <div>
            <div className="card border-0 what_we_teach_section_card p-4 rounded-14">
                <div className="text-center">
                    <img src={props.logo} className="mb-2"/>
                    <h4>{props.title}</h4>
                </div>
            </div>
        </div>
    )
}

export default TeachCard
