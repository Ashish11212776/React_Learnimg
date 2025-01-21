import  "./App.css"; 
import {useState} from 'react';
function App(){
  const [count, setCount] = useState(0);

  return(
    <>
    <div className="card">
      <h1>Count Click!</h1>
      <button onClick={()=>setCount(count+1)}>Hitme! {count}</button>
    </div>
    </>
  )
};
export default App;