import { useState } from "react";
import cl from './Counter.module.scss'

const Counter = () => {
  const [ count, setCount ] = useState(0);

  return ( 
    <div>
      <p>{count}</p>
      <button className={cl.btn} onClick={() => setCount(count + 1)}>+</button>
    </div>
   );
}
 
export default Counter;