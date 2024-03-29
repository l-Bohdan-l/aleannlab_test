import styled from 'styled-components';

// @media screen and (min-width: 414px) {

export const MainJobWrapper = styled.div`
    @media screen and (min-width: 1920px) {
        display: flex;
        justify-content: center;
        gap: 80px;
        align-items: flex-start;
        background-color: white;
    }
`

export const SecondJobWrapper = styled.div`
    width: 780px;
`

export const JobDetailMainTitle = styled.h1`
    font-weight: 700;
    font-size: 28px;
    line-height: 1.21;
    letter-spacing: 0.413333px;

    color: #3A4562;
    margin-bottom: 17px;

    ::after{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #E5E5E5;
        margin-top: 20px;

    }
`

export const JobDetailList = styled.ul`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 36px;
`

export const ListItem = styled.li`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.44;
    /* text-align: center; */
    letter-spacing: -0.5px;

    color: rgba(56, 65, 93, 0.82);
    margin-bottom: 32px;
`

export const ListSpan = styled.span`
    margin-left: 12px;
`

export const JobTitle = styled.h2`
    font-weight: 700;
    font-size: 24px;
    line-height: 1.25;    
    letter-spacing: -0.75px;
    color: #3A4562;
    margin-bottom: 5px;
`

export const PostedDate = styled.p`
    font-weight: 300;
    font-size: 13px;
    line-height: 1.92;   
    letter-spacing: 0.191905px;
    color: rgba(56, 65, 93, 0.602109);
`

export const SalarySpan = styled.span`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.5625px;
    color: rgba(56, 65, 93, 0.82);
`

export const Salary = styled.span`
font-weight: 700;
font-size: 20px;
line-height: 1.25;
letter-spacing: -0.625px;
color: #3A4562;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
`

export const SalaryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const EuroIcon = styled.span`
    margin-right: 3px;
`

export const MainText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;    
    letter-spacing: -0.5625px;
    color: rgba(56, 65, 93, 0.82);
    margin-bottom: ${props => 
    props.description ? '43px' : '15px'};    
    
`

export const Title = styled.h3`
    font-weight: 700;
    font-size: 20px;
    line-height: 1.25;
    letter-spacing: -0.625px;
    color: #3A4562;
    margin-bottom: 20px;
`

export const BenefitsList = styled.ul`
    display: ${props => props.benefitStyle === true ? 'block' : 'flex'};
    justify-content: ${props => props.benefitStyle === true ? 'none' : 'space-evenly'}; 
    align-items: ${props => props.benefitStyle === true ? 'none' : 'center'};   
    gap: ${props => props.benefitStyle === true ? 'none' : '7px'};
    list-style: ${ props => props.benefitStyle === true ? 'square' : 'none'};
    margin-bottom: ${props => props.benefitStyle === true ? '15px' : '63px'};

    @media screen and (min-width: 1920px) {
        justify-content: flex-start;
    }
    `
export const BenefitsListItem = styled.li`
    display: ${props => props.benefitStyleItem === true ? 'list-item' : 'flex'};
    justify-content: ${props => props.benefitStyleItem === true ? 'none' : 'center'};
    align-items: ${props => props.benefitStyleItem === true ? 'none' : 'center'};
    
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.5625px;
    
 
    color: ${props => props.benefitStyleItem === true ?'rgba(56, 65, 93, 0.82)' : '#988B49'};

    background: ${props => props.benefitStyleItem === true ? 'none' : 'rgba(255, 207, 0, 0.15)'};
    border: ${props => props.benefitStyleItem === true ? 'none' : '1px solid #FFCF00'};
    border-radius: ${props => props.benefitStyleItem === true ? 'none' : '8px'};
    width: ${props => props.benefitStyleItem === true ? 'none' : '170px'};
    height: ${ props => props.benefitStyleItem === true ? 'none' : '50px' };
    `

export const ApplyButton = styled.button`
    background: #384564;
    border-radius: 8px;
    width: 127px;
    height: 52px;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.33;    
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    border: none;
    margin-bottom: 135px;

`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 1920px) {
        justify-content: flex-start;
    }
`

export const SecondTitle = styled.h2`
    font-weight: 700;
    font-size: 28px;
    line-height: 1.21;
    letter-spacing: 0.413333px;

    color: #3A4562;
    margin-bottom: 17px;

    ::after{
        content: '';
        display: block;
        width: 100%;
        height: 1px;
        background-color: #E5E5E5;
        margin-top: 20px;

    }
`

export const AttachedImage = styled.img`
    width: 208px;
`

export const AttachedImageList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 20px;
`

export const AttachedImageSection = styled.section`
    margin-bottom: 64px;
`

export const InfoListTitle = styled.h4`  
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;    

    letter-spacing: -0.5625px;
    color: #3A4562;
    margin-bottom: 10px;
`

export const InfoListItem = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(161, 177, 219, 0.317343);
    border: 1px solid rgba(85, 105, 158, 0.3);
    border-radius: 8px;
    width: 122px;
    height: 50px;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.00;
    text-align: center;
    letter-spacing: -0.457143px;
    color: #55699E;
    `

export const InfoList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 22px;

    @media screen and (min-width: 1920px) {
        justify-content: flex-start;
        gap: 7px;
    }
`

export const ContactsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #3A4562;
    color: #E7EAF0;
    padding: 20px 0;
    height: 400px;
    margin-bottom: 20px;
`

export const ContactsInfoWrapper = styled.div`
    text-align: center;
    margin-bottom: 20px;
`

export const ContactsInfoItem = styled.li`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.33;
    letter-spacing: -0.5625px;
    margin-bottom: 5px;  
`

export const MapWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (min-width: 1920px) {
        width: 420px;
    }
`

export const MapPlaceholder = styled.p`
    font-weight: 400;
    font-size: 24px;
    line-height: 1.33;
    letter-spacing: -0.5625px;
    margin-bottom: 5px; 
`

export const BackButton = styled.button`
    @media screen and (max-width: 1919px) {
        display: none;
    }

    width: 213px;
    height: 50px;   
    background: rgba(161, 177, 219, 0.317343);
    border-radius: 8px;
    border: none;
    `
   export const BackButtonText = styled.span`
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.33; 

    text-align: center;
    text-transform: uppercase;

    color: #55699E
`