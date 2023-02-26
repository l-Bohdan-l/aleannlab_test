import styled from "styled-components";


export const BenefitsList = styled.ul`
    list-style: ${ benefits => 'square' || 'none'};
    margin-bottom: 15px;
    `
export const BenefitsListItem = styled.li`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.33;   

    letter-spacing: -0.5625px;

    color: rgba(56, 65, 93, 0.82);
    `