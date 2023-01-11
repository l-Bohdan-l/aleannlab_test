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