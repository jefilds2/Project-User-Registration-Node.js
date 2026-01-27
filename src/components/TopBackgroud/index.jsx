import { Background } from "./styles";
import UsersImage from '../../img/users.png';

function TopBackground() {

  return (
      <Background>
        <img src={UsersImage} alt="Imagem de usuários"/>
      </Background>
  )
}
export default TopBackground;