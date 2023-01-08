import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchJobs } from "../../services/api"
import moment from "moment"
import { AiOutlineStar } from 'react-icons/ai';
import { BsShareFill } from 'react-icons/bs';
import { JobDetailMainTitle, JobDetailList } from "./JobDetailed.styled";

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
                    <JobDetailMainTitle>Job Details</JobDetailMainTitle>
                    <div>
                        <JobDetailList>
                            <li>
                                <AiOutlineStar />
                                <span>
                                Save to my list
                                </span>
                            </li>
                            <li>
                                <BsShareFill />
                                <span>
                                    Share
                                </span>
                            </li>
                        </JobDetailList>
                    </div>
                    <h2>{job.title}</h2>
                    <span>Posted {moment.duration(moment().diff(job.createdAt))
                        .humanize()} ago</span>
                    <span>Brutto, per year</span>
                    <span>{job.salary}</span>
                    <p>{job.description}</p>

                    <h3>Responsibility</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sed?</p>

                    <h3>Compensation & Benefits:</h3>
                    <ul>
                        {job.benefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                        ))}
                    </ul>
                    <button type="button">Apply Now</button>
                </div>
                )}                
            </div>
    )    
}