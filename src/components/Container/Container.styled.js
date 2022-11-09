import styled from 'styled-components';

export const Div = styled.div`
  margin-left: auto;
  margin-right: auto;
  /* width: 100%; */
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 9px;
  padding-bottom: 9px;
  
  @media screen and (min-width: 414px) {
    width: 414px;  
  }
  
  @media screen and (min-width: 1920px) {
    width: 1920px;
    padding-top: 28px;
    padding-bottom: 28px;
  }
`;