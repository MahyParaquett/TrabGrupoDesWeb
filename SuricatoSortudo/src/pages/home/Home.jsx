import surilogo from "../../components/img/logosuricatocirc.png";
import "../../root/root.css";
import Colrows from "../../components/colrows/Colrows";
import CarouselHome from "../../components/carouselHome/CarouselHome";

function Home() {
  return (
    <>
      <Colrows />
      <div>
        <h1>O Suricato Sortudo</h1>
        <a href="#" target="_blank">
          <img src={surilogo} className="logo" alt="logo" />
        </a>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius harum
          facere amet ipsa libero, esse hic quam aut numquam blanditiis,
          veritatis sed dolor consequuntur deleniti pariatur earum expedita,
          aspernatur porro! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quo enim eaque labore vitae voluptas quaerat consectetur
          excepturi ab quibusdam dolor quam odio doloribus fugiat assumenda,
          pariatur explicabo, deserunt nihil earum. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Repudiandae, fugit maiores quam quod aut
          assumenda neque, quisquam quidem, pariatur error dicta vel molestias
          magnam! Error quasi beatae corporis repellat aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius harum
          facere amet ipsa libero, esse hic quam aut numquam blanditiis,
          veritatis sed dolor consequuntur deleniti pariatur earum expedita,
          aspernatur porro! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quo enim eaque labore vitae voluptas quaerat consectetur
          excepturi ab quibusdam dolor quam odio doloribus fugiat assumenda,
          pariatur explicabo, deserunt nihil earum. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Repudiandae, fugit maiores quam quod aut
          assumenda neque, quisquam quidem, pariatur error dicta vel molestias
          magnam! Error quasi beatae corporis repellat aspernatur.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius harum
          facere amet ipsa libero, esse hic quam aut numquam blanditiis,
          veritatis sed dolor consequuntur deleniti pariatur earum expedita,
          aspernatur porro! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quo enim eaque labore vitae voluptas quaerat consectetur
          excepturi ab quibusdam dolor quam odio doloribus fugiat assumenda,
          pariatur explicabo, deserunt nihil earum. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Repudiandae, fugit maiores quam quod aut
          assumenda neque, quisquam quidem, pariatur error dicta vel molestias
          magnam! Error quasi beatae corporis repellat aspernatur.
        </p>
      </div>
    </>
  );
}

export default Home;
