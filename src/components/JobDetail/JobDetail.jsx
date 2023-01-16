import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchJobs } from "../../services/api"
import moment from "moment"
import { AiOutlineStar } from 'react-icons/ai';
import { BsShareFill } from 'react-icons/bs';
import { JobDetailMainTitle, JobDetailList, ListItem, ListSpan, JobTitle, PostedDate, SalarySpan, Salary, Wrapper, SalaryWrapper, EuroIcon, MainText, Title, BenefitsList, ApplyButton } from "./JobDetailed.styled";

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
                            <ListItem>
                                <AiOutlineStar />
                                <ListSpan>
                                Save to my list
                                </ListSpan>
                            </ListItem>
                            <ListItem>
                                <BsShareFill />
                                <ListSpan>
                                    Share
                                </ListSpan>
                            </ListItem>
                        </JobDetailList>
                    </div>
                    <JobTitle>{job.title}</JobTitle>
                    <Wrapper>
                        <PostedDate>Posted {moment.duration(moment().diff(job.createdAt))
                            .humanize()} ago
                        </PostedDate>
                        <SalaryWrapper>

                            <SalarySpan>Brutto, per year</SalarySpan>
                            <Salary>
                                <EuroIcon>
                                €
                                </EuroIcon>
                                {job.salary}
                            </Salary>
                        </SalaryWrapper>
                    </Wrapper>
                    <MainText description>{job.description}</MainText>

                    <Title>Responsibility</Title>
                    <MainText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, sed?</MainText>

                    <Title>Compensation & Benefits:</Title>
                    <MainText>
                        Our physicians enjoy a wide range of benefits, including:
                    </MainText>
                    <BenefitsList>
                        {job.benefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                        ))}
                    </BenefitsList>
                    <ApplyButton type="button">Apply Now</ApplyButton>
                </div>
                )}                
            </div>
    )    
}