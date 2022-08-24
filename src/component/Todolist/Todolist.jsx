import React from 'react';


function Todolist(props) {
    const {obj} = props;
    return (
        <div>
             {obj.map(item =>{
         return <li key={item.id}>{item.title}</li>
      })}
        </div>
    );
}

export default Todolist;