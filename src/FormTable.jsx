import React,{useState} from 'react'
function FormTable(props) {
    const [name,setName]=useState();
    const [mail,setmail]=useState();
    const [branch,setbranch]=useState();
    const [usn,setusn]=useState();
    const [sem,setsem]=useState();
    const [phone,setphone]=useState();
    const funcNew = (e) => {
      e.preventDefault();
      const data={
        name: name,
        email:mail,
        branch:branch,
        usn:usn,
        phone:phone,
        sem:sem
        
      }
        //console.log(data);
      
    props.onAddToDoCallback(data);
    }
  return (
    <div>
    <form onSubmit={funcNew}><br /><br />
       <input type="text" name="name" placeholder='Enter name' value={name} onChange={(e) =>setName(e.target.value)} /><br /><br />
       <input type="text" name="usn" placeholder='Enter usn' value={usn} onChange={(e) =>setusn(e.target.value)} /><br /><br />
       <input type="text" name="mail" placeholder='Enter email' value={mail} onChange={(e) =>setmail(e.target.value)} /><br /><br />
       <input type="text" name="phone" placeholder='Enter phone' value={phone} onChange={(e) =>setphone(e.target.value)} /><br /><br />
       <input type="text" name="sem" placeholder='Enter sem' value={sem} onChange={(e) =>setsem(e.target.value)} /><br /><br />
       <input type="text" name="branch" placeholder='Enter branch' value={branch} onChange={(e) =>setbranch(e.target.value)} /><br /><br />
       
       <button style={{width:165}}>Submit</button>
    </form>
    
   
   
       </div>
  )
}

export default FormTable