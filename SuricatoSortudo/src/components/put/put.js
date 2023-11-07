import axios from "axios";
import { useState, useEffect } from "react";

const [produtos, setProdutos] = useState([]);

const url = "https://6542cd3301b5e279de1f982d.mockapi.io/produtos";

export const getProdutos = async () => {
  try {
    const { data } = await axios.get(url);
    setProdutos(data);
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  getProdutos();
}, []);

export function CreatePost() {
  const putProduto = async (id, novoProdutoData) => {
    try {
      const response = await axios.put(`${url}/${id}`, novoProdutoData);
      console.log("Produto atualizado com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao atualizar o produto:", error);
    }
  };

  useEffect(() => {
    putProdutos();
  }, []);

  return (
    <>
      <input
        onChange={onChangeContent}
        type="text"
        value={content}
        placeholder={"Escreva seu post..."}
      ></input>
      <button className="BotaoPostar" onClick={createPost}>
        <em>Postar</em>
      </button>
    </>
  );
}
