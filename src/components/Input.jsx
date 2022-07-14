import { useRef } from "react";
import Wrapper from "./style/Input.styles";
import Label from "./Label";

const Input = ({ text = "btn", hasIcon = false, vertical=true, placeholder='',updateInput,value='',filterNow = ()=>{} }) => {
  const inputRef = useRef(null);
  const handleChange = ( ) => {
    updateInput(inputRef.current.value);
  };
  const handlePress = (e) => {
    if(e.key === "Enter"){
      filterNow(value);
    }
  }

  return (
    <Wrapper>
      <div className={ vertical==true?" ":"input-element"}>
        <Label text={text} className={hasIcon == true ? "label-for-input" : "label"} />
        <div className="input-container">
          <input className={ hasIcon == true ? "input-field styled-icon" : "input-field input-regular"} 
          type="text" placeholder={placeholder}
          ref={inputRef}
          onChange={handleChange}
          onKeyPress={handlePress}
          value={value}>
          </input>
        </div>
      </div>
    </Wrapper>
  );
};

export default Input;