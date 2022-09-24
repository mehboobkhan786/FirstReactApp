import React from 'react'

function Welcome(props){
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Usn: {props.usn}</h1>
            <h1>Branch: {props.branch}</h1>
            <h1>Sem: {props.sem}</h1>
            <h1>Gmail: {props.mail}</h1>
            <h1>College: {props.clg}</h1>
        </div>
    )
}

function Props() {
  return (
    <div>
        
        <Welcome name='Mubarak' usn='4MK19CS033' mail='mehboobkhanraza970@gmail.com' sem='7th' clg='MIT Kundapura' branch='CSE'/>
    </div>
  )
}

export default Props