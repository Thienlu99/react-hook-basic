import React from 'react';
import Todoitem from './Todoitem';
import  { useState } from 'react';

function Todolist(props) {
    let [value, setValue] = useState("lu");
    let [address, setaddress] = useState("Nhập vào đi");
    let [obj, setObj] = useState([
      {id:1, title:"Playing Soccer",name:"Lu"},
      {id:2, title:"Playing tenis",name:"B"},
      {id:3, title:"Do my homework",name:"C"},
    ]
  
    )
    const onSubmit = () =>{
      //tao biến mới lưu trữ title: gán address vào
      let todonew = {id: Math.floor((Math.random() * 100)+1),title:address, name:"Lu"}
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
    const onDeleteX = (id) =>{
      let changeObj = obj;
      changeObj = changeObj.filter(item => item.id !== id)
      setObj(changeObj)
    }
    
    return (
        <>
    
        <Todoitem obj={obj} title="All obj" onDeleteX={onDeleteX}/>
      <Todoitem obj={obj.filter( item => item.name ==="Lu")} title="Name:Lu" onDeleteX={onDeleteX}/>
      <input type="text" value={address} onChange={(event) => {handelChange(event) }} />
      <button type="button" onClick={()=>{onSubmit()}}>Click</button> 
     
     
        </>
    );
}

export default Todolist;