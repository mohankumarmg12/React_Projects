import React from 'react'
import { useState } from 'react'

function Geolocator() {
  const [ip,setIp] = useState("")
  const [ipDetails ,setIpDetails]= useState({})
  async function handleSubmit(){
    const response = await fetch(`http://ip-api.com/json/${ip}`)
    const data = await response.json();
    setIpDetails(data) 
  }
  return (
    <div>
      <label htmlFor="">Enter Valid Geolocation : </label>
      <input type="text" value={ip} onChange={(e)=>{setIp(e.target.value)}} name="" id="" />
      <button onClick={()=>{
      handleSubmit()
      }}>Submit</button>
      {
        ipDetails && (
          <div>
            <h1>Your Details based on the ip address</h1>
            <h2> Country :{ipDetails.country}</h2>
            <h2> City :{ipDetails.city}</h2>
            <h2> TimeZone :{ipDetails.timezone}</h2>
            <h2> CountryCode :{ipDetails.countryCode}</h2>
          </div>
        )
      }
    </div>
  )
}

export default Geolocator