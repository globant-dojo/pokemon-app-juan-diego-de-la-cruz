import { useState, useRef } from "react";
import Wrapper from "./style/PokemonDetail.styles";
import Label from "./Label";
import Input from "./Input";
import ProgressBar from "./ProgressBar";
import BranchButtons from "./BranchButtons";

const PokemonDetail = ({ value = "lorem", className, name="",image="" }) => {
  const [inValue, setInValue] = useState(null);

  return (
    <Wrapper className={className}>
      <div
        className={"styled-container"}
        value={inValue === null ? value : inValue}
      >
        <div>
          <Label value={"Nuevo Pokemon"} className={"title"}/>
        </div>
        <div className="detail-element">
          <Input value="Nombre:" vertical={false}/>
          <ProgressBar text="Ataque"/>
        </div>
        <div className="detail-element">
          <Input value="Imagen:" vertical={false}/>
          <ProgressBar text="Defensa"/>
        </div>
        <BranchButtons pt="pt"/>
      </div>
    </Wrapper>
  );
};

export default PokemonDetail;
