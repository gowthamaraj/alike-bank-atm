import React, { useState } from 'react';
import './App.css';
import Input from './components/input/input'
import Fetch from './components/fetch/fetch'
import Total from './components/total/total'
import Error from './components/errors/error'

function App() {
  const  [amount, update] = useState(0)
  let code = (
    <><Fetch amount= {amount}/>
      <hr/>
      <Total amount= {amount}/></>
  )
  if(amount%100 !== 0){
      code = <Error error="This amount can’t be withdrawn" msg="Available denominations:  ₹2000, ₹500, ₹200, ₹100"/>
  }
  if(amount>25000){
    code = <Error error="Amount exceeds the user limit" />
  }
  return (
    <div className="atm">
      <Input amount= {amount} update= {update}/>
      <hr/>
      {code}
      </div>
  );
}

export default App;
