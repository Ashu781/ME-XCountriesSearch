import React,{useState,useEffect} from 'react';
import axios from 'axios';
import sty from './Styles.module.css';
import Card from './card';

function App() {

  let [countries, setCountries] = useState([]);
  let [search, setSearch] = useState("");

 let filteredCountries = countries.filter((ele)=>
     ele.common.toLowerCase().includes(search.toLowerCase())
);


  useEffect(()=>{
     
    async function getData(){
      try{
        let response = await axios.get("https://countries-search-data-prod-812920491762.asia-south1.run.app/countries");
        setCountries(response.data);
      }
      catch(err){
        console.log(err);
      }
    }

    getData();
    console.log(countries);

  },[]);



  return (
   <>
   <div style={{height:"60px",backgroundColor:"#EEEEEE",overflow:"hidden"}}>
    <input type='text' placeholder='Search for countries' value={search} onChange={(e)=>setSearch(e.target.value)} style={{width:"800px", height:"30px", margin:"7px auto", display:"block", padding:"5px"}}/>
   </div>

   <div style={{margin:"20px 60px", display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "20px" }}>
     {
      filteredCountries.map((ele)=>(
        <Card img={ele.png} name={ele.common}/>
      ))
     }
   </div>
   </>
  );
}

export default App;
