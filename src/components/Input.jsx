import { useState, useRef } from "react";
import Wrapper from "./style/Input.styles";
import Label from "./Label";

const Input = ({ value = "btn", hasIcon = false, vertical=true, placeholder='' }) => {
  const [inValue, setInValue] = useState(null);

  return (
    <Wrapper>
      <div className={ vertical==true?" ":"input-element"}>
        <Label value={value} className={hasIcon == true ? "label-for-input" : ""} />
        <div className="input-container">
          <input className={ hasIcon == true ? "input-field styled-icon" : "input-field"} type="text" placeholder={placeholder}>
          </input>
        </div>
      </div>
    </Wrapper>
  );
};

export default Input;