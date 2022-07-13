import { useState, useRef } from "react";
import Wrapper from "./style/BranchButtons.styles";
import Button from "./Button";


const BranchButtons = ({pt=""}) => {
  const [inValue, setInValue] = useState(null);

  return (
    <Wrapper className={"branch-buttons " + pt } >
      <Button value={"Guardar"} className={"icon-save"} />
      <Button value={"Cancelar"} />
    </Wrapper>
  );
};

export default BranchButtons;
