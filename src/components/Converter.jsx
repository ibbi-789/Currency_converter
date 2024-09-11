import React from 'react';
import { useState } from 'react'
import Currency from './Currency';
import './Converter.css';
const Converter = () => {
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [amount, setAmount] = useState(1);
    const [toCurrency, setToCurrency] = useState("PKR");
    const [result, setResult] = useState("");

    const getExchangeRates = async () => {
        const API_KEY = "409151683199ac24652566c9";
        const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;
        try {
            const response = await fetch(API_URL);
            if (!response.ok) {
                throw Error("Something went wrong");
            } const data = await response.json();
            const rate = (data.conversion_rate*amount).toFixed(2);
           setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`);
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        getExchangeRates();
    }
    return (

        <div>

            <form className="form " onSubmit={handleSubmit}>
                <div className="amount flex gap-4">
                    <label htmlFor="amount" className='text-white text-lg'>Enter Amount</label>
                    <input className='border-black border rounded-lg px-4' type="number" id="amount" required value={amount} onChange={e => setAmount(e.target.value)}/>
                </div>
                <div className="country_conversion flex justify-between p-8">
                    <Currency selectedcurrency={fromCurrency} changecurrency={e => setFromCurrency(e.target.value)} />
                    <Currency selectedcurrency={toCurrency} changecurrency={e => setToCurrency(e.target.value)} />

                </div>
                <button type='submit' className='flex bg-blue-900 text-white rounded-md w-fit mx-auto p-2 items-center'>Get Exchange Rates</button>




                <div className="output flex justify-center align-middle gap-8 p-4 mt-2 border-orange-300">
                    <h2 className='font-bold text-white text-lg'>Result</h2>
                    <p className='font-light text-white text-lg'>{result}</p>
                </div>
            </form>
        </div>

    )
}


export default Converter
