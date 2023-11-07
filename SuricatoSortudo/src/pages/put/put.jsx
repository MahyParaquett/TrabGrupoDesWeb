import axios from "axios";
import { useState, useEffect } from "react";

const url = "https://65496be2dd8ebcd4ab2491f6.mockapi.io/produtos";

export const CreatePut = () => {
  const [produtos, setProdutos] = useState({
    categoria: "",
    descricao: "",
    img: "",
    nome: "",
    valor: 0,
  });

  const put = async (id, dadosDoProduto) => {
    try {
      const response = await axios.put(`${url}/${id}`, dadosDoProduto);

      props.setPosts(response.data.Post);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={() => put(1, dadosDoProduto)}>Atualizar Produto</button>
    </div>
  );
};
