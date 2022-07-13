import { useState, useRef } from "react";
import Wrapper from "./style/Modal.styles";

const Modal = ({ value = "lorem", className }) => {
  const [booleanModal, setBooleanModal] = useState(false);
  const inputRef = useRef(null);
  var modal = document.getElementById("myModal");

  const showModal = () => {
    setBooleanModal(true);
  }
  const hideModal = () => {
    setBooleanModal(false);
  }

  const hideModalShadow = (event) => {
    if (event.target == inputRef.current) {
      setBooleanModal(false);
    }

  }

  return (
    <Wrapper className={className} >
      <h2>Modal Example</h2>
      <button id="myBtn" onClick={showModal} >Open Modal</button>
      <div
        id="myModal" 
        className={booleanModal == true ? 'modal d-block' : 'modal'} 
        onClick={hideModalShadow} 
        ref={inputRef}>
        <div className="modal-content">
          <span className="close" onClick={hideModal}>&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;
