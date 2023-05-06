import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const colleddata = useLoaderData();

  const [datas, setdata] = useState(colleddata);
  const handleDelete  = id =>{
    console.log( 'delete', id);
    fetch(`http://localhost:5000/users/${id}`, {
        method: 'DELETE'
    })
    .then(res=> res.json())
    .then(data => {
        console.log(data);
        if(data.deletedCount>0){
            alert('deleted successfully');
            const remaining = datas.filter(user => user._id !== id);
            setdata(remaining); 
        }
    })

  }
  return (
    <div>
      <h1>users {datas.length}</h1>
      {datas?.map((dt) => (
        <p key={dt?._id}>
          {dt?.name} {dt?.email} {dt?._id}
          <Link to={`/update/${dt._id}`}>Update</Link>
          <button onClick={()=>handleDelete(dt?._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Users;
