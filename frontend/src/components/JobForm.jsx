import {useNavigate} from "react-router-dom";
import {useState} from 'react';
export default function JobForm(){
    const navigate= useNavigate();
    const[title, setTitle] = useState("");
    const[company,setCompany] = useState("");
    const[salary, setSalary] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
     const newJob={
        title,company,salary
     };
     fetch("http://localhost:5000/jobs",{
        method:"POST",headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJob)

     })
    .then((res)=>res.json())
    .then((data)=>{
        console.log("job added",data);
        setTitle("");
        setCompany("");
        setSalary("");
    })
    .then(()=>{navigate("/");
    });
    };
    return(
    <div className="container">
        <form onSubmit = {handleSubmit}>
            <h3 id="formaddjob" >Add New Job</h3>
            <input type = "text" placeholder="enter title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
            <input type = "text" placeholder = "enetr company" value={company} onChange={(e)=>setCompany(e.target.value)}/>
            <input type = "text" placeholder = "enter salary" value={salary}onChange={(e)=>setSalary(e.target.value)}/>
            <button type="submit">add job</button>



        </form>

    </div>
        

    )
}