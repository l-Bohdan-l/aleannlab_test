import styled from 'styled-components';

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
    list-style: square;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;   

    letter-spacing: -0.5625px;

    color: rgba(56, 65, 93, 0.82);
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

`