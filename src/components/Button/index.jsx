import { MyButton } from "./styles";
import PropTypes from 'prop-types';


function DefautButton({children,theme, ...props}) {

  return (
    <MyButton {...props} theme={theme}>{children}</MyButton>
  )
}

DefautButton.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.string
};

export default DefautButton;