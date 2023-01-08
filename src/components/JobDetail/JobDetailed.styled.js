import styled from 'styled-components';

export const JobDetailMainTitle = styled.h1`
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
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
`