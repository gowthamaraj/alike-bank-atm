import React from 'react'

export default function Input(props) {
    const amountSubmit = (e) => {
        e.preventDefault()
        props.update(e.target.amount.value)
    }
    return (
        <div className="atm_input">
            <h1 className="atm_heading text-center">Alike Bank ATM</h1>
            <form onSubmit= {amountSubmit}>
                <label>Amount(₹)</label>
                <br/>
                <input type="number" name="amount"></input>
                <br/>
                <button className="btn btn-light atm_btn" type="submit">Withdraw</button>
            </form>
        </div>
    )
}

