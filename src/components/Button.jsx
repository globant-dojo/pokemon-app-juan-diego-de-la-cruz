import { useState, useRef } from "react";
import Wrapper from "./style/Button.styles";


const Button = ({ value = "btn", className='icon', mb , showDetail}) => {
  const [inValue, setInValue] = useState(null);
  const executeMethod = () => {
    showDetail();
  }

  return (
    <Wrapper>
      <button type="button" className={ 'styled-button ' + className + ' ' + mb} onClick={executeMethod}>{ value }</button>
    </Wrapper>
  );
};

export default Button;
