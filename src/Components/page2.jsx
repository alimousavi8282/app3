import '../style/Component1.css' 
import { useState } from 'react'
import Main from './page1';
import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Show() {
    const navigate = useNavigate();
    const location = useLocation();
    const { Name,Email,Age,Number } = location.state || {};

    return(
<>

<div>
<h1>your name : {Name}</h1><br />
<h1>your email : {Email}</h1><br />
<h1>your age : {Age}</h1><br />
<h1>your phone number : {Number}</h1>
<button onClick={cli}>back</button>

</div>


</>
)
}
export default Show;