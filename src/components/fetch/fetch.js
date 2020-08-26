import React from 'react'

export default function Fetch(props) {
    const amountLocal = props.amount
    const note2k = Math.floor(amountLocal/2000)
    const note5h = Math.floor((amountLocal-note2k*2000)/500)
    const note2h = Math.floor((amountLocal-note2k*2000-note5h*500)/200)
    const final_amount = (amountLocal-note2k*2000-note5h*500-note2h*200)
    const note1h = Math.floor(final_amount/100)
    return (
        <div className="atm_fetch">
        <h4>Denominations Fetched</h4><p className="atm_fetch_rs">₹2000 x {note2k}</p
            ><p className="atm_fetch_rs">₹500 x {note5h}</p><p className="atm_fetch_rs">₹200 x {note2h}</p>
            <p className="atm_fetch_rs">₹100 x {note1h}</p>
        </div>
    )
}
