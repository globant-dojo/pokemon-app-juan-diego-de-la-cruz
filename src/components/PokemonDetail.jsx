import { useState, useEffect } from "react";
import Wrapper from "./style/PokemonDetail.styles";
import Label from "./Label";
import Input from "./Input";
import ProgressBar from "./ProgressBar";
import BranchButtons from "./BranchButtons";
import useHttp from "../hooks/use-http";

const PokemonDetail = ({ title, className, showDetail, editPokemon = null }) => {
  const { sendRequest: savePokemon } = useHttp({
    url: 'https://bp-pokemons.herokuapp.com/?idAuthor=1',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  },  () => {});

  const { sendRequest: updatePokemon } = useHttp({
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
  }, () => {});


  const [inTitle] = useState(null);
  const [pokemon, setPokemon] = useState({});
  const [identity,setIdentity] = useState(null);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [attack, setAttack] = useState(50);
  const [defense, setDefense] = useState(50);
  const [disableButton, setDisableButton] = useState(true);


  const nameHandler = (val) => {
    setName(val);
  }
  const imageHandler = (val) => {
    setImage(val);
  }
  const attackHandler = (val) => {
    setAttack(val);
  }
  const defenseHandler = (val) => {
    setDefense(val);
  }

  const updateHandler = (val) => {
    switch (val) {
      case 'SAVE':
        savePokemon('https://bp-pokemons.herokuapp.com/?idAuthor=1', pokemon);
        showDetail("update_data");
        break;
      case 'UPDATE':
        updatePokemon('https://bp-pokemons.herokuapp.com/'+pokemon.id, pokemon);
        showDetail("update_data",pokemon);
        break;
      case 'CANCEL':
        showDetail();
        break;
      default:
        break;
    }
    setDisableButton(true);
    setName('');
    setImage('');
    setAttack(50);
    setDefense(50);
  }

  useEffect(() => {
    
    if (name === '' || image === '') {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }

    setPokemon(
      {
        id:identity,
        name: name,
        image: image,
        attack: attack,
        defense: defense,
        hp: 100,
        type: "Dragón",
        id_author: 1,
        idAuthor:1
      }
    )
  }, [name, image, attack, defense]);

  useEffect(() => {    
    return () => {
      if(editPokemon !==null){
        setIdentity(editPokemon.id)
        setName(editPokemon.name);
        setImage(editPokemon.image);
        setAttack(editPokemon.attack);
        setDefense(editPokemon.defense);
      }
    };
  }, [editPokemon]);


  return (
    <Wrapper className={className}>
      <div className={"styled-container"}>
        <div>
          <Label text={inTitle === null ? title : inTitle} className={"title"} />
        </div>
        <div className="detail-element">
          <Input text="Nombre:" vertical={false} value={name} updateInput={nameHandler} />
          <ProgressBar text="Ataque" value={attack} updateInput={attackHandler} />
        </div>
        <div className="detail-element">
          <Input text="Imagen:" vertical={false} value={image} updateInput={imageHandler} />
          <ProgressBar text="Defensa" value={defense} updateInput={defenseHandler} />
        </div>
        <BranchButtons pt="pt" value={editPokemon==null?'SAVE':'UPDATE'} updateButton={updateHandler} isDisabled={disableButton} />
      </div>
    </Wrapper>
  );
};

export default PokemonDetail;
