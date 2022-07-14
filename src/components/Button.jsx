import Wrapper from "./style/Button.styles";

const Button = ({ value = "btn", className = 'icon', mb, showDetail, disable = false }) => {
  const executeMethod = () => {
    showDetail(value);
  }
  return (
    <Wrapper>
      <button type="button"
        disabled={disable}
        className={disable === true ? 'disable styled-button ' + className + ' ' + mb : 'styled-button ' + className + ' ' + mb} onClick={executeMethod}>{value}</button>
    </Wrapper>
  );
};

export default Button;
