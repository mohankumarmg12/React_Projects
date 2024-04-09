import React, { useState } from "react";

function Expense() {
  const [name, setName] = useState("");
  const [amt, setAmt] = useState("");
  const [dates, setDates] = useState("");
  const [type, setType] = useState("Grocery");
  const [final, setFinal] = useState([]);
  function handleChange(e) {
    setType(e.target.value);
  }
  function handleSubmit() {
    setFinal([...final, { Name: name, Amount: amt, Date: dates, Type: type }]);
  }

  return (
    <div className="flex w-[100vw] h-[100vh] flex-col justify-center items-center ">
      <h1 className="font-bold text-2xl">Expense Tracker</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="">Name of the Expense: </label>
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="border-[2px] border-neutral-950 mb-[2px]"
        />
        <br />
        <label htmlFor="">Type: </label>
        <select
          value={type}
          onChange={handleChange}
          className="border-[2px] border-neutral-950 mb-[8px]"
        >
          <option value="Grocery">Grocery</option>
          <option value="Fees">Fees</option>
          <option value="Hotel">Hotel</option>
          <option value="Recharge">Recharge</option>
        </select>
        <br />
        <label htmlFor="">Amount: </label>
        <input
          type="number"
          name=""
          id=""
          value={amt}
          onChange={(e) => {
            setAmt(e.target.value);
          }}
          className="border-[2px] border-neutral-950 mb-[2px]"
        />
        <br />
        <label htmlFor="">Date of the Transaction: </label>
        <input
          type="date"
          value={dates}
          onChange={(e) => {
            setDates(e.target.value);
          }}
          className="border-[2px] border-neutral-950 mb-[2px]"
        />
        <br />

        <button
          type="submit"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
      </form>
      <h1 className="font-bold text-2xl">Summary</h1>
      {
        final && 
            final.map((_,i)=>{

                return <div id={i}>
                <p>{_.Name}</p>
                <p>{_.Type}</p>
                <p>{_.Date}</p>
                <p>{_.Amount}</p> <br />
                </div>
            })
        
      }
    </div>
  );
}

export default Expense;
