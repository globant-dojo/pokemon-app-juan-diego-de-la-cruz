import Wrapper from "./style/BranchButtons.styles";
import Button from "./Button";

const BranchButtons = ({ pt = "", value, updateButton, isDisabled }) => {
  const handlerSave = () => {
    if (value === 'UPDATE') {
      updateButton("UPDATE");
    } else {
      updateButton("SAVE");
    }
  };
  const handlerCancel = () => {
    updateButton("CANCEL");
  };

  return (
    <Wrapper className={"branch-buttons " + pt} >
      <Button value={"Guardar"} className={"icon-save"} showDetail={handlerSave} disable={isDisabled} />
      <Button value={"Cancelar"} showDetail={handlerCancel} />
    </Wrapper>
  );
};

export default BranchButtons;
