import { useState, useRef } from "react";
import Wrapper from "./style/Table.styles";

const Table = ({ value = "lorem", className = '' }) => {
  const [inValue, setInValue] = useState(null);

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
          <tr>
            <td>
              Ivysaur
            </td>
            <td>
              <img src={""} />
            </td>
            <td>
              65
            </td>
            <td>
              38
            </td>
            <td>
              <div className="icon-group">
                <i className="icon-edit" />
                <i className="icon-delete" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Table;
