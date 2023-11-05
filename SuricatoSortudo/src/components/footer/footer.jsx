import suricatoFooter from "../img/suricatoFooter.jpg";
import { MainFooter } from "./footer.styled";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <MainFooter>
      <img src={suricatoFooter} width={"170vw"} height={"170vh"}/>
      <Link to = "/contatos" style={{ color: "#d6c271" }} >Contatos</Link>
    </MainFooter>
  );
}
export default Footer;

