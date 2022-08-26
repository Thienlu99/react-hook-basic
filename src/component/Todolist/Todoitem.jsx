import React from 'react';


function Todoitem(props) {
    const {obj,title,onDeleteX} = props;
    const handelDelete =(id)=>{
        onDeleteX(id)
    }
    
    return (
        <>
    
        <div>
        <div>{title}</div>
             {obj.map(item =>{
         return <li key={item.id}>{item.title} <span onClick={()=> {handelDelete(item.id)}}>&nbsp; X</span></li>
      })}
        </div>
        <hr />
        </>
    );
}

export default Todoitem;