import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://6542cd3301b5e279de1f982d.mockapi.io/produtos";
function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [pesquisa, setPesquisa] = useState("");
  const [loading, setLoading] = useState("false");

  const getProdutos = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      console.log(data);
      setProdutos(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getProdutos();
  }, []);

  const pesquisaProdutos = produtos.filter((produto) => {
    return (
      produto.nome.toLowerCase().startsWith(pesquisa.toLowerCase()) ||
      produto.categoria.toLowerCase().startsWith(pesquisa.toLowerCase())
    );
  });

  return (
    <>
      <label>
        Pesquise por nome ou categoria
        <br />
        <input
          type="text"
          placeholder="O que vamos jogar hoje?"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          style={{ margin: 20, padding: 10, width: 255 }}
        />
      </label>
      <br />

      <button onClick={getProdutos} disabled={true}>
        Listar todos os produtos
      </button>
      {pesquisaProdutos.map((item) => (
        <div key={item.id}>
          <h3>
            {item.nome} - {item.categoria}, R$ {item.valor}{" "}
            <button style={{ margin: 10, padding: 10 }}>
              <FaShoppingCart style={{ fontSize: "24px" }} />
            </button>
          </h3>
        </div>
      ))}
    </>
  );
}

export default Produtos;
