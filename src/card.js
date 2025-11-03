import React from "react";
import st from './Styles.module.css';

export default function Card({img,name}){

  
    return(
        <>
        <div className={st.countryCard}>
            <img src={img} alt={name} height="100px" width="50%" style={{margin:"15px"}}/>
            <p>{name}</p>
        </div>
        </>
    );
}