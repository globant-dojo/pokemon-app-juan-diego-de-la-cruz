import { useState, useRef } from "react";
import Wrapper from "./style/PokemonMain.styles";
import Input from "./Input";
import Button from "./Button";
import Table from "./Table";
import PokemonDetail from "./PokemonDetail";

const PokemonMain = ({ value = "lorem", className }) => {
  const [showDetail, setShowDetail] = useState(false);
  const handlerDetail = () => {
    if(showDetail==true){
      setShowDetail(false);
    }else{
      setShowDetail(true);
    }
    
  }

  return (
    <Wrapper>
      <div className="main-container">
        <Input value={"Listado de Pokemon"} hasIcon={true} placeholder="Buscar"/>
        <Button value={"Nuevo"} className={'icon'} mb={"mb"}  showDetail={handlerDetail}/>
      </div>
      <div className="main-container">
        <Table className={"w-100"} />
      </div>
      {
        showDetail == true ?
          <div className="main-container">
            <PokemonDetail className={"w-100"} />
          </div>:
          <></>
      }
    </Wrapper>
  );
};

export default PokemonMain;