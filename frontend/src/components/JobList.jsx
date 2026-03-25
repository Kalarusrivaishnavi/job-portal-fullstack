import {useNavigate} from "react-router-dom";
import {useState, useEffect} from 'react';
import JobCard from './JobCard';
export default function jobList(){
    const navigate = useNavigate();
    const [jobs, setJobs]= useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/jobs")
        .then(res=>res.json())
        .then(data=>setJobs(data))
    },[])
    return(
        <div>
            <div id="addjob">
              <button onClick= {()=>navigate("/add")}>Add Job</button>
            </div>
            <div className="container">
                {

                  jobs.map((job)=>(
                    <JobCard
                    key={job._id}
                    id={job._id}
                    title={job.title}
                    company={job.company}
                    salary={job.salary}
                    />
                  ))

                } 
            </div>

       

        </div>
   
)}