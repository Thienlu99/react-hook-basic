
import './App.css';
import Nav from './component/Header/Nav';
import  { useState } from 'react';
import React  from 'react';
function App() {
  let [value, setValue] = useState("lu");
  let [address, setaddress] = useState("Nhập vào đi");
  let [obj, setObj] = useState([
    {"id":1, "title":"Playing Soccer"},
    {"id":2, "title":"Playing tenis"},
    {"id":3, "title":"Do my homework"},
  ]

  )
  const onSubmit = () =>{
    let todonew = {id:"add",title:address}
    // alert(value);
    setValue(address);
    // spead syntax array js
    setObj([...obj,todonew]);
    //reset
    setaddress("");
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
      <h1>Thay đổi thông tin nè nhập vào nè: {value}</h1>
      {obj.map(item =>{
        return <li>{item.title}</li>
      })}
      <input type="text" value={address} onChange={(event) => {handelChange(event) }} />
      <button type="button" onClick={()=>{onSubmit()}}>Click</button>
    </div>
  );
}

export default App;
