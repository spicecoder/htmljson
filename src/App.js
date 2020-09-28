import React,{useState } from 'react';
import Datain from './components/Datain.js'
import Datashout from './components/Datashout.js'

function App() {

const [dataReceived ,setDataReceived ] = useState("")



  return (
    <div  >
      <Datashout data = {dataReceived} />
      <Datain  datain={(item)=> setDataReceived(item)}/> 
    </div>
  );
}

export default App;
