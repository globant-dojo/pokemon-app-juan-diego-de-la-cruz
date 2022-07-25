import Wrapper from "./style/Table.styles";
import useHttp from "../hooks/use-http";

const Table = ({ value, className = '', filter = null, searchNow , showDetail }) => {
  const { sendRequest: deletePokemon } = useHttp({
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }, () => {});

  const editHandler = (val) => {    
    showDetail('show_detail',val);
  }

  const deleteHandler = (val) => {
    deletePokemon('https://bp-pokemons.herokuapp.com/'+val);    
    showDetail('update_data');
  }

  let valueFiltered = value;
  if (searchNow === true) {
    valueFiltered = value.filter(pokemon => pokemon.name === filter);
  }
  let rows = valueFiltered.map((e) => {
    return (
      <tr key={e.id}>
        <td>
          {e.name}
        </td>
        <td>
          <img className="image" src={e.image} alt={e.name} />
        </td>
        <td>
          {e.attack}
        </td>
        <td>
          {e.defense}
        </td>
        <td>
          <div className="icon-group">
            <i className="icon-edit" onClick={() => editHandler(e)} />
            <i className="icon-delete" onClick={() => deleteHandler(e.id)} />
          </div>
        </td>
      </tr>
    )
  });
  
  return (
    <Wrapper className={className}>
      <table className="styled-table">
        <thead>
          <tr>
            <th>
              Nombre
            </th>
            <th>
              Imagen
            </th>
            <th>
              Ataque
            </th>
            <th>
              Defensa
            </th>
            <th>
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Table;
