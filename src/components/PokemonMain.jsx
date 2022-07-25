import { useState, useEffect } from "react";
import Wrapper from "./style/PokemonMain.styles";
import Input from "./Input";
import Button from "./Button";
import Table from "./Table";
import PokemonDetail from "./PokemonDetail";
import useHttp from "../hooks/use-http";

const PokemonMain = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchNow, setSearchNow] = useState(false);
  const [refreshData, setRefreshData] = useState(false);
  const [createOp, setCreateOp] = useState(true);
  const [specificPokemon, setSpecificPokemon] = useState({});

  const transformPokemons = data => {
    const loadedPokemons = [];
    for (const taskKey in data) {
      loadedPokemons.push({ id: data[taskKey].id, name: data[taskKey].name, image: data[taskKey].image, attack: data[taskKey].attack, defense: data[taskKey].defense, hp: data[taskKey].hp, type: data[taskKey].type, id_author: data[taskKey].id_author })
    }
    setPokemons(loadedPokemons);
  }

  const {sendRequest: fetchPokemons } = useHttp({ url: 'https://bp-pokemons.herokuapp.com/?idAuthor=1' }, transformPokemons);
  const [showDetail, setShowDetail] = useState(false);
  const [textSearch, setTextSearch] = useState('');
  const handlerDetail = (val = '',data = null) => {
    console.log("HANDLER_DETAIL", val);
    if (showDetail === true) {
      setShowDetail(false);
      if (val === 'update_data') {
        setRefreshData(true);
        fetchPokemons();
      }
    } else {
      if (val === 'update_data') {
        setRefreshData(true);
        fetchPokemons();
      } else {
        if(val === 'show_detail'){
          console.log("POGGIES_SHOW DETAIL EDIT",data==null?'':data);
          setCreateOp(false);
          setSpecificPokemon(data);
        }else{
          setCreateOp(true);
        }
        setShowDetail(true);
        
      }
    }
  }

  useEffect(() => {

    return () => {
      fetchPokemons();
      setRefreshData(false);
      setSearchNow(false);
    };
  }, [textSearch, refreshData]);

  const updateTitle = (val) => {

    setTextSearch(val);
  }

  const updateFilter = (val) => {
    setSearchNow(true);
  }

  return (
    <Wrapper>
      <div className="main-container">
        <Input text={"Listado de Pokemon"} hasIcon={true} placeholder="Buscar" value={textSearch} updateInput={updateTitle} filterNow={updateFilter} />
        <Button value={"Nuevo"} className={'icon'} mb={"mb"} showDetail={handlerDetail} />
      </div>
      <div className="main-container">
        <Table className={"w-100"} value={pokemons} filter={textSearch} searchNow={searchNow} showDetail={handlerDetail} />
      </div>
      {
        showDetail === true ?
          <div className="main-container">
            
            {
              createOp === true?
              <PokemonDetail className={"w-100"} title={"Nuevo Pokemon"} showDetail={handlerDetail}/>:
              <PokemonDetail className={"w-100"} title={"Actualiza Pokemon"} showDetail={handlerDetail} editPokemon={specificPokemon}/>
            }
          </div> :
          <></>
      }
    </Wrapper>
  );
};

export default PokemonMain;