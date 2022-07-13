import styled from '@emotion/styled';
const Wrapper = styled.div`
  .styled-container{
    padding: 35px;
    border: solid 1px rgb(128, 128, 128);
  }
  .title{
    text-align: center;
    padding-bottom: 35px;
  }
  .detail-element{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 50px;
    padding-right: 50px;
  }
  .branch-buttons{
    display: flex;
    justify-content: space-evenly;
  }
  .pt{
    padding-top:35px;
  }
`;
export default Wrapper;