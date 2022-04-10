import React from "react";

const CartItem=props=>{
    return(
        <div>
            <div className="card cart_list_card p-3">
                <div className="d-flex gap-3">
                    <div className="w_40">
                        <img src={props.image} className="w-100"/>
                    </div>
                    <div className="w_60">
                        <h5 className="cart_list_card_title">{props.title}</h5>
                        <p className="cart_list_card_text">
                            {props.subtitle}
                        </p>
                        <button className="btn cart_list_card_remove_btn">Remove from cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
