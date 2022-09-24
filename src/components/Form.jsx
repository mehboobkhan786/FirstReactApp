import React,{useState} from 'react'



function Form() {
  const [name,setName]=useState();
  const [number,setnumber]=useState();
  const [mail,setmail]=useState();
  const [branch,setbranch]=useState();
  const [clg,setclg]=useState();
  const funcNew = (e) => {
    e.preventDefault();
    const data={
      name: name,
      email:mail,
      clg:clg,
      branch:branch,
      mobile:number
    }
    console.log(data.name);
  
  }
  return (
    <div>
      <form onSubmit={funcNew}>
        <input type="text" placeholder='name' value={name} onChange={(e) =>setName(e.target.value)} /><br/><br/>
        <input type="email" placeholder='Email' value={mail} onChange={(e) =>setmail(e.target.value)} /><br/><br/>
        <input type="number" placeholder='Mobile' value={number} onChange={(e) =>setnumber(e.target.value)} /><br/><br/>
        <input type="text" placeholder='Branch' value={branch} onChange={(e) =>setbranch(e.target.value)} /><br/><br/>
        <input type="text" placeholder='College' value={clg} onChange={(e) =>setclg(e.target.value)} /><br/><br/>
        <button type='submit'>Submit</button>
      </form>
  
    </div>
  )
  
  
 
}


export default Form


// onSubmit={funcNew()}