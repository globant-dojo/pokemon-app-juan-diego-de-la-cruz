import { useState, useRef } from "react";
import Wrapper from "./style/ProgressBar.styles";
import Label from "./Label";

const ProgressBar = ({ value = 50, text="" }) => {
  const [inValue, setInValue] = useState(null);
  const inputRef = useRef(null);
  const handleChange = () => {
    setInValue(inputRef.current.value);
  };

  return (
    <Wrapper>
      <div className="styled-progressbar">
        <Label value={text} className={"text"}/>
        <div className="limit-side">
          0
        </div>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={inValue === null ? value : inValue}
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
