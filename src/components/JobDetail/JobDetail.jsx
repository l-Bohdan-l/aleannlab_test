import { useEffect, useState } from "react"
import { fetchJobs } from "../../services/api"
import {moment} from "moment"

export function JobDetail(id) {
    const [job, setJob] = useState([]);
    useEffect(() => { 
        fetchJobs().then((response) => setJob(response.data.find((job) => job.id === id)));
    }, [id]);
    return (
        <div>
            <h1>Job Details</h1>
            <h2>{job.title}</h2>
            <span>Posted {moment.duration(moment().diff(job.createdAt))
                .humanize()} ago</span>
            <p>{job.description}</p>

            <h3>Responsibility</h3>
            <p>{job.responsibility}</p>

            <h3>Compensation & Benefits:</h3>
        </div>
    )    
}