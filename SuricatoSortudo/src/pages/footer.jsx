import suricatoFooter from "../components/img/suricatoFooter.jpg";
import { MainFooter } from "./footer.styled";

export function Footer() {
  return (
    <MainFooter>
      <img src={suricatoFooter} />
      <p>home</p>
      <p>produtos</p>
      <p>contatos</p>
      <p>sobre</p>
    </MainFooter>
  );
}
