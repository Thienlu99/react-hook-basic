import React from 'react';


function Todolist(props) {
    const {obj,title} = props;
    return (
        <>
    
        <div>
        <div>{title}</div>
             {obj.map(item =>{
         return <li key={item.id}>{item.title}</li>
      })}
        </div>
        <hr />
        </>
    );
}

export default Todolist;