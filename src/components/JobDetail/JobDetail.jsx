import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchJobs } from "../../services/api"
import moment from "moment"

export function JobDetail() {
    const [job, setJob] = useState(null);
    // const [jobs, setJobs] = useState([]);
    const { jobId } = useParams();
    console.log('id', jobId);

    useEffect(() => { 
        fetchJobs().then((response) => {
            console.log('1', response.data)
            setJob(response.data.find((job) => job.id === jobId))
        });
    }, [jobId]);

    //  useEffect(() => {
    //     fetchJobs().then((response) => setJobs(response.data));
    //  }, []);
    console.log('job', job);

    return (
        <div>
            {job && (
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
                )}                
            </div>
    )    
}