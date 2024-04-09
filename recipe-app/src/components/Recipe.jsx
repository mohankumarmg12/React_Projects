import React, { useState } from "react";

function Recipe() {
  const [inputname, setInputName] = useState("");
  const [recipedata, setRecipeData] = useState([]);
  const [meals, setMeals] = useState([]);
  const[pop,setPop] = useState(false);
  function callInput(e) {
    const { value } = e.target;
    setInputName(value);
  }
  async function handleSubmit() {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputname.trim()}`
    );
    const data = await response.json();
    setRecipeData(data.meals);
  }
  async function getDetails(id) {
      setMeals([]);
      const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        setMeals(data.meals);
        setPop(true)
        // document.body.classList.add("overflow-hidden");
  
  }
  return (
    <>
      <div className="flex justify-center w-[98vw] gap-[10px]  mt-[24px] z-[-1]">
        <input
          className="border-violet-500 border-[3px] py-[5px] px-[2px]"
          type="text"
          value={inputname}
          onChange={callInput}
        />
        <button
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </button>
      </div>
      <div className="flex w-[80vw] flex-wrap mx-auto gap-[10px] mt-[20px]">
        {recipedata.length > 0 &&
          recipedata.map((_) => {
            return (
              <div id={_.idMeal} className="w-[25vw] box-shadow p-[10px]">
                <img src={_.strMealThumb} alt="" />
                <p className="text-center">{_.strMeal}</p>
                <div className="flex w-[25vw] justify-center" id={_.idMeal}>
                  <button
                    onClick={() => {
                      getDetails(_.idMeal);
                    }}
                    className="border-[2px] border-violet-500"
                  >
                    Get Recipe Details
                  </button>
                </div>
              </div>
            
            );
          })}
      </div>
       {pop &&
      (<div className="fixed top-0 left-0 w-full h-full bg-white overflow-hidden">
        <div className="flex flex-col w-[70vw] mx-auto mt-[10px]">
            <div className="w-[200px] "> <img src={meals[0].strMealThumb} alt="" /></div>
           
            <h1 className="text-xxl font-bold">Instructions :
            </h1>
            <p>{meals[0].strInstructions}</p>
            <div><label  className="font-bold"htmlFor="">Link: </label>
            <a href={meals[0].strYoutube}>Youtube</a><br />
            </div>
             
            <button onClick={()=>{setPop(false);}}>Close</button>
            </div>
      </div>)
      } 
     
    </>
  );
}

export default Recipe;
