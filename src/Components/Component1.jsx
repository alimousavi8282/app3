import '../style/Component1.css'
import { useState } from 'react';

function Ali () {
    const [Count,setCount] = useState (0);
    const [Name,setName] = useState ("");
    const [Hold,setHold] = useState ("");
    const ars = [{id:1,name:'ali'},{id:2 , name :'mammad'},{id:3,name:'nima'}]
    return(
<>
<div>
<h1>{Count}</h1>
<button onClick={()=> setCount(Count+1) }>+</button>
<button onClick={()=> Count!= 0 ? setCount(Count-1):setCount(Count) }>-</button>
{Count===10 && alert("yes")}

<div>
    
    <input type="text" onChange={(e)=> setName(e.target.value)} />
    <button onClick={()=> setHold(Name)}>send</button>
    <p>{Name}</p>
    <p>{Hold}</p>
</div>
</div>
<div>
    {ars.map((ar,key) => ar.name )}
</div>
</>

    );
}
export default Ali;