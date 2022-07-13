import styled from '@emotion/styled';
const Wrapper = styled.div`
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
  }
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
  }
  .close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover{
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }
  .d-block{
    display:block;
  }
`;
export default Wrapper;