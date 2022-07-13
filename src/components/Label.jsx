import { useState, useRef } from "react";
import Wrapper from "./style/Label.styles";

const Label = ({ value = "lorem", className }) => {
  const [inValue, setInValue] = useState(null);

  return (
    <Wrapper className={ className }>
      <label
        className={"styled-label "+className}
        value={inValue === null ? value : inValue}
      >
        {value}
      </label>
    </Wrapper>
  );
};

export default Label;
