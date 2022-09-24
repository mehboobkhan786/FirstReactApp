import React,{useState} from 'react'




function Form(props) {
    const [name,setname]=useState({name:'',completed:false});

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddToDoCallback(name);
        setname({name:'',completed:false})

    }

  return (
    <div>
 <form onSubmit={handleSubmit}>
    <input type="text" name="name" placeholder='Enter To Do list' value={name.name} onChange={(e) =>setname({name: e.target.value,completed:false})}/><br></br>
    <button>Add</button>
 </form>
 


    </div>
  )
}

export default Form