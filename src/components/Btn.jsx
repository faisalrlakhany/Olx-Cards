 import React from "react"

const Btn = ({title})=>{

  const button = {
        backgroundColor: "#007bff",
        color: "white",
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        marginBottom:"10px",
        transition:"0.5s"
    }
   const buttonHover = {
        backgroundColor: "#0056b3"

   }   

    return(

        <>
            <button style={button} onMouseEnter={(e)=>{e.target.style.backgroundColor = buttonHover.backgroundColor}}
                onMouseLeave={(e)=>{e.target.style.backgroundColor = button.backgroundColor}}
                >{title}</button>       
        </>
    )



}



export default Btn