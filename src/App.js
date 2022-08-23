
import './App.css';
import Nav from './component/Header/Nav';
import  { useState } from 'react';
function App() {
  let [value, setValue] = useState("lu");
  let [address, setaddress] = useState("Nhập vào đi");
  const onSubmit = () =>{
    
    // alert(value);
    setValue(address);
  }
  const handelChange = (event) =>{
    setaddress(
    event.target.value
   );
   console.log(event.target.value);
  }
  return (
    <div className="container">
      <Nav />
      <h1>Thay đổi thông tin nè {value}</h1>
      <input type="text" value={address} onChange={(event) => {handelChange(event) }} />
      <button type="button" onClick={()=>{onSubmit()}}>Click</button>
    </div>
  );
}

export default App;
