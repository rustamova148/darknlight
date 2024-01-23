import React, { useEffect, useState } from 'react'

const Shop = () => {
const [mode,setMode] = useState(localStorage.getItem("mode"));

useEffect(()=>{
    if(localStorage.getItem("mode") === null){
        setMode("light");
        localStorage.setItem("mode","light");
    }
    document.body.className = localStorage.getItem("mode");
},[])

const modeFunc = () => { 
    if(mode === "light"){
        setMode("dark");
    }else{
        setMode("light");
    }
    localStorage.setItem("mode",mode);
    document.body.className = localStorage.getItem("mode");
}
  return (
    <div className='shop'>
    <div className='navbar'>
    <ul>
    <li>Home</li>
    <li>Shop</li>
    <li>About</li>
    <li>Contact</li>
    </ul>
    <button onClick={modeFunc} className='btn btn-success'>
        Dark/Light
    </button>
    </div>
    </div>
  )
}

export default Shop