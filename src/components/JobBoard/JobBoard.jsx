import {MdLocationOn} from 'react-icons/md';
import {RiStarSFill} from 'react-icons/ri';
// import img from '../../img/person1.jpg';
import { JobBoardItem, JobBoardImg, JobBoardPostedTime, JobBoardStars, JobBoardStarsWrapper, JobBoardTitle, JobBoardSubtitle, JobBoardLocation, JobWrapper, JobList, JobCardWrapper } from './JobBoard.styled';
import { fetchJobs } from '../../services/api';
import { useState, useEffect } from 'react';
import moment from "moment";
import { Link } from 'react-router-dom';

export function JobBoard() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetchJobs().then((response) => setJobs(response.data));
     }, []);
    // fetchJobs()
    console.log('jobs', jobs);
    
 

    return (
        <div>
            <JobList>
                {jobs.map((job) => (
                    <Link key={job.id} to={`/job-board/${job.id}`}>
                    <JobBoardItem key={job.id}>
                        <JobBoardImg src={job.pictures[1]} alt="company logo" width='329' />
                        <JobCardWrapper>
                            <JobBoardStarsWrapper>
                                <JobBoardStars>
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                    <RiStarSFill />
                                </JobBoardStars>
                                <JobBoardPostedTime>Posted {moment.duration(moment().diff(job.createdAt))
    .humanize()} ago</JobBoardPostedTime>
                            </JobBoardStarsWrapper>
                            <JobWrapper>
                                <JobBoardTitle>{job.title}</JobBoardTitle>
                                <JobBoardSubtitle>
                                    {job.name}
                                </JobBoardSubtitle>
                                <JobBoardLocation><MdLocationOn size={18} /> { job.address}</JobBoardLocation>
                            </JobWrapper>
                        </JobCardWrapper>
                        </JobBoardItem>
                        </Link>
                        ))
                    }
            </JobList>
        </div>
    )
}