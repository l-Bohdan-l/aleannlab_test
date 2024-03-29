import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { fetchJobs } from "../../services/api"
import moment from "moment"
import {MdLocationOn} from 'react-icons/md';
import { AiOutlineStar } from 'react-icons/ai';
import { BsShareFill } from 'react-icons/bs';
import { JobDetailMainTitle, JobDetailList, ListItem, ListSpan, JobTitle, PostedDate, SalarySpan, Salary, Wrapper, SalaryWrapper, EuroIcon, MainText, Title, BenefitsList, ApplyButton, ButtonWrapper, SecondTitle, AttachedImage, AttachedImageList, AttachedImageSection, InfoListTitle, InfoListItem, InfoList, BenefitsListItem, ContactsContainer, ContactsInfoWrapper, ContactsInfoItem, MapWrapper, MapPlaceholder, MainJobWrapper, SecondJobWrapper, BackButton, BackButtonText } from "./JobDetailed.styled";
import { nanoid } from "nanoid";

export function JobDetail() {
    const [job, setJob] = useState(null);  
    const { jobId } = useParams();

    let navigate = useNavigate();

    function handleClick () {
        navigate("/job-board");
    }
    console.log('id', jobId);

    useEffect(() => { 
        fetchJobs().then((response) => {
            console.log('1', response.data)
            setJob(response.data.find((job) => job.id === jobId))
        });
    }, [jobId]);
    
    console.log('job', job);

    return (
        <div>
            {job && (
                <MainJobWrapper>
                    <SecondJobWrapper>
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
                        <BenefitsList benefitStyle>
                            {job.benefits.map((benefit) => (
                                <BenefitsListItem benefitStyleItem key={nanoid()}>{benefit}</BenefitsListItem>
                            ))}
                        </BenefitsList>
                        <ButtonWrapper>
                            <ApplyButton type="button">Apply Now</ApplyButton>
                        </ButtonWrapper>
                        <AttachedImageSection>
                            <SecondTitle>
                                Attached images 
                            </SecondTitle>

                            <AttachedImageList>
                                {job.pictures.map((picture) => (                                    
                                    <li key={nanoid()}>
                                        <AttachedImage src={picture} alt="job" />
                                    </li>
                                ))}
                            </AttachedImageList>
                        </AttachedImageSection>                   
                        <section>
                            <SecondTitle>Additional Info</SecondTitle>
                            <InfoListTitle>Employment type</InfoListTitle>
                            <InfoList>
                                <InfoListItem>Full time</InfoListItem>
                                <InfoListItem>Part time</InfoListItem>
                                <InfoListItem>Temporary</InfoListItem>
                            </InfoList>
                            <InfoListTitle>Benefits</InfoListTitle>
                                <BenefitsList>
                                    {job.benefits.map((benefit) => (
                                        <BenefitsListItem key={nanoid()}>{benefit}</BenefitsListItem>
                                    ))}
                                </BenefitsList>
                        </section>
                        <BackButton type="button" onClick={handleClick}>
                            <BackButtonText>
                                Return to  Job Board
                            </BackButtonText>
                        </BackButton>
                    </SecondJobWrapper>
                    <div>
                        <section>
                            <SecondTitle>Contacts</SecondTitle>
                            <ContactsContainer>
                                <ContactsInfoWrapper>
                                    <ul>
                                        <ContactsInfoItem><MdLocationOn/>{job.address}</ContactsInfoItem>
                                        <ContactsInfoItem>{job.phone}</ContactsInfoItem>
                                        <ContactsInfoItem>{job.email}</ContactsInfoItem>
                                    </ul>
                                </ContactsInfoWrapper>
                                <MapWrapper>
                                    <MapPlaceholder>
                                        Map Unavailable
                                    </MapPlaceholder>
                                </MapWrapper>
                            </ContactsContainer>
                        </section>
                    </div>                    
                </MainJobWrapper>
                )}                
            </div>
    )    
}