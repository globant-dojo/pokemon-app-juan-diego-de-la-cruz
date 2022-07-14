import { useRef } from "react";
import Wrapper from "./style/ProgressBar.styles";
import Label from "./Label";

const ProgressBar = ({ value, text="" , updateInput}) => {
  const inputRef = useRef(null);
  const handleChange = () => {    
    updateInput(inputRef.current.value);
  };

  return (
    <Wrapper>
      <div className="styled-progressbar">
        <Label text={text} className={"text"}/>
        <div className="limit-side">
          0
        </div>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={value}
          onChange={handleChange}
          ref={inputRef} />
        <div className="limit-side">
          100
        </div>
      </div>
    </Wrapper>
  )
};

export default ProgressBar;
