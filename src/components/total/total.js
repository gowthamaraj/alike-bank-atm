import React from 'react'

export default function Total(props) {
    return (
        <div>
            <h4 className="atm_total">Total = <span className="atm_total_rs">₹{props.amount||0}</span></h4>
        </div>
    )
}
