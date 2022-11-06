import styled from "styled-components";

export const JobBoardItem = styled.li`
    /* width: 100%; */
    height: auto;
    max-height: none;

@media screen and (min-width:414px) {
    max-width: 396px;
    max-height: 206px;
    
}
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
    
`;

export const JobBoardImg = styled.img`
    width: 40px;
    height: 40px;
    margin-right: 10px;

@media screen and (min-width: 414px) {
        width: 66px;
        height: 66px;  
        margin-right: 19px;
  }
    border-radius: 50%;
    margin-top: 32px;
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
`;

export const JobBoardTitle = styled.h2`    
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;    
    letter-spacing: -0.5625px;
    color: #3A4562;
    margin-bottom: 5px;
`;

export const JobBoardSubtitle = styled.p`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.56;    
    letter-spacing: 0.23619px;
    color: #878D9D;
    margin-bottom: 7px;
`;

export const JobBoardLocation = styled.p`
    font-size: 16px;
    line-height: 1.56;    
    letter-spacing: 0.23619px;
    color: #878D9D;
`;