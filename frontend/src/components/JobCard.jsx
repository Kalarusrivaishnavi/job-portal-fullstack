import {useState} from "react";
export default function JobCard({id,title,company,salary}){
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const handleUpdate = ()=>{
        fetch(`http://localhost:5000/jobs/${id}`,{
            method: "PUT",
            headers:{
                "content-Type": "application/json"
            },
            body:JSON.stringify({title: newTitle })

        })
        .then(res=>res.json())
        .then(()=>{
            console.log("updated");
            setIsEditing(false);
            window.location.reload();
        });
    };
    const handleDelete = ()=>{
        fetch(`http://localhost:5000/jobs/${id}`,{
            method: "DELETE"

        })
        .then(res=>res.json())
        .then((data)=>{console.log("deleted", data);
        });
        console.log("deleted",id);
        window.location.reload();
    };
    return(
        <div className="job-card">
            {isEditing ? (
                <>
                 <input
                 value={newTitle}
                 onChange={(e)=>
                    setNewTitle(e.target.value)}
                 />
                 <button onClick={handleUpdate}>Update</button>
                </>
            ) : (
                <>
                 <h3>{title}</h3>
                 <p>company:{company}</p>
                 <p>salary:{salary}</p>
                </>
            )}
            <div className="btn-group">
                <button className="edit-btn" onClick={()=>setIsEditing(true)}>Edit</button>
                <button className="delete-btn" onClick={handleDelete}>Delete</button>

            </div>

           
        </div>
    );
}