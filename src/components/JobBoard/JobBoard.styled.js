import styled from "styled-components";

export const JobBoardItem = styled.li`
    /* width: 100%; */
    height: auto;
    max-height: none;

    background: #EFF0F5;
    border-radius: 8px;
    margin: 0 auto;
    padding-bottom: 27px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 17px;
    display: flex;  
    justify-content: space-between;
    align-items: start;
    
    @media screen and (min-width:414px) and (max-width: 1920px) {
        max-width: 396px;
        max-height: 206px;
        
    }
    
    @media screen and (min-width:1920px) {
        justify-content: flex-start;
        gap: 26px;
        display: flex;
        width: 1400px;
        height: 164px;
        background: #FFFFFF;
        box-shadow: 2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12);
        padding-bottom: 24px;
        padding-left: 16px;
        padding-right: 16px;
        padding-top: 24px;
        
    }
`;

export const JobBoardImg = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;
    border-radius: 50%;
    display: inline-block;

@media screen and (min-width: 414px) {
        width: 66px;
        height: 66px;  
        margin-right: 19px;
  }
    margin-top: 32px;

    @media screen and (min-width: 1920px) {
        width: 85px;
        height: 85px;
        margin-top: 24px;
        
    }
`;

export const JobBoardPostedTime = styled.div`
    font-weight: 300;
    font-size: 14px;
    line-height: 1.21;
    text-align: right;
    letter-spacing: 0.206667px;
    color: #878D9D;
    display: inline-block;
`;

export const JobBoardStars = styled.div`
    height: 10px;
    color: #878D9D;
    display: inline-block;
`;

export const JobBoardStarsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 17px;
    @media screen and (min-width: 1920px) {
        flex-direction: column;
    }
`;

export const JobBoardTitle = styled.h2`    
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;    
    letter-spacing: -0.5625px;
    color: #3A4562;
    margin-bottom: 5px;

    @media screen and (min-width: 1920px) {
        font-weight: 700;
        font-size: 20px;
        line-height: 1.25;
        letter-spacing: -0.625px;
        margin-bottom: 8px;
    }
`;

export const JobBoardSubtitle = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.56;    
    letter-spacing: 0.23619px;
    color: #878D9D;
    margin-bottom: 7px;

    @media screen and (min-width: 1920px) {
        margin-bottom: 8px;
    }
`;

export const JobBoardLocation = styled.p`
    font-size: 16px;
    line-height: 1.56;    
    letter-spacing: 0.23619px;
    color: #878D9D;
`;

export const JobWrapper = styled.div`
    @media screen and (min-width: 1920px) {
        display: flex;
        /* flex-direction: row-reverse; */
        justify-content: center;
        /* align-items: center;        */
        flex-direction: column;
        align-items: flex-start;
        width: 959px;
    }
`;

export const JobList = styled.ul`
    display: flex;
    flex-direction: column;
`

export const JobCardWrapper = styled.div`
    @media screen and (min-width: 1920px) {
        display: flex;
        flex-direction: row-reverse;   
        gap: 170px;
    }
    
`