import Selection from "./Components/Selection";
import {useState} from 'react'

function App() {



  const [clicked, setClicked] = useState(false)

  function gotoSelection() {
    setClicked(true)
  }

  if(clicked === true)
    return <Selection price = '1000'/>

  return (
    <>
       <h3>Welcome to amazon!</h3>

       <button onClick = {gotoSelection}>
        Select product
        </button>
       
    </>
  );
}

export default App;
