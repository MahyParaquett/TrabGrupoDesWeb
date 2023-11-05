import suricatoFooter from "../img/suricatoFooter.jpg";
import { MainFooter } from "./footer.styled";

import { Link } from "react-router-dom";

export function Footer() {
  return (
    <MainFooter>
      <img src={suricatoFooter} />
      <p as={Link} to="/produtos">
        home
      </p>
      <p>produtos</p>
      <p>contatos</p>
      <p>sobre</p>
    </MainFooter>
  );
}
export default Footer;
