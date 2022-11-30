import {MdLocationOn} from 'react-icons/md';
import {RiStarSFill} from 'react-icons/ri';
import img from '../../img/person1.jpg';
import {JobBoardItem, JobBoardImg, JobBoardPostedTime, JobBoardStars, JobBoardStarsWrapper, JobBoardTitle, JobBoardSubtitle, JobBoardLocation, JobWrapper, JobList, JobCardWrapper} from './JobBoard.styled';

export function JobBoard() {
    return (
        <div>
            <JobList>
                <JobBoardItem>
                    <JobBoardImg src={img} alt="company logo" width='329'/>
                    <JobCardWrapper>
                        <JobBoardStarsWrapper>
                            <JobBoardStars>
                                <RiStarSFill />
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                                <RiStarSFill/>
                            </JobBoardStars>
                            <JobBoardPostedTime>posted 2 days ago</JobBoardPostedTime>
                        </JobBoardStarsWrapper> 
                        <JobWrapper>
                        <JobBoardTitle>Arbeitsmediziner/-in / <br/> Betriebsmediziner/-in (m/w/d)</JobBoardTitle>
                        <JobBoardSubtitle>
                            Department name • Allgemeines Krankenhaus der Stadt Wien - AKH
                        </JobBoardSubtitle>
                        <JobBoardLocation><MdLocationOn size={18}/> Vienna, Austria</JobBoardLocation>
                        </JobWrapper>                   
                    </JobCardWrapper>
                </JobBoardItem>
            </JobList>
        </div>
    )
}