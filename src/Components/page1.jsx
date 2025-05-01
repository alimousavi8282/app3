import '../style/Component1.css' 
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Main (){
const [Name,setName]=useState("");
const [Age,setAge]=useState("");
const [Email,setEmail]=useState("");
const [Number,setNumber]=useState("");
const navigate = useNavigate();

const handleClick = () => {
    const userInfo = {
        Name,
        Email,
        Age,
        Number
        };
navigate("/information" , { state: userInfo });
};
return(
<>
<div className='mainDiv'>
<h1>form</h1><br />
<div>
    
    <div className='row'><input type="text" onChange={(e)=>setName(e.target.value)} /><p>Your name  : </p></div>
    <div className='row'><input type="text" onChange={(e)=>setAge(e.target.value)} /><p>your age  : </p></div>
    <div className='row'><input type="text" onChange={(e)=>setEmail(e.target.value)} /><p> email  : </p></div>
    <div className='row'><input type="text" onChange={(e)=>setNumber(e.target.value)} /><p>phone number : </p></div>

</div>
<br /><br />
<button onClick={handleClick}>Enter</button>
</div>



</>
)
}
export default Main;