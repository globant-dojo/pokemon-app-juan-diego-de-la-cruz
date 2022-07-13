import styled from '@emotion/styled';
const Wrapper = styled.div`
  .main-container{
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 35px;    
    margin: auto;
  }
  .w-100{
    width:100%;
  }
  @media only screen and (max-width: 575px) {
  .main-container {
      width: 100%;
    }
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    .main-container {
        width: 540px;
    }
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    .main-container {
        width: 720px;
    }
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    .main-container {
        width: 960px;
    }
  }
  @media only screen and (min-width: 1200px) and (max-width: 1399px) {
    .main-container {
        width: 960px;
    }
  }
  @media only screen and (min-width: 1400px) {
    .main-container {
      width: 1320px;
    }
  }
`;
export default Wrapper;