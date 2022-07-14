import { useState, useRef } from "react";
import Wrapper from "./style/Label.styles";

const Label = ({ text = "lorem", className ='' }) => {
  const [inValue, setInValue] = useState(null);

  return (
    <Wrapper className={ className }>
      <label
        className={"styled-label "+className}
        value={inValue === null ? text : inValue}
      >
        {text}
      </label>
    </Wrapper>
  );
};

export default Label;
