import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://65496be2dd8ebcd4ab2491f6.mockapi.io/produtos";

function Put() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [valor, setValor] = useState(0);
  const [imagem, setImagem] = useState("");
  const [productId, setProductId] = useState(""); 

  const submitPut = async () => {
    const produtoAtualizado = {
      nome: nome,
      descricao: descricao,
      categoria: categoria,
      valor: valor,
      imagem: imagem,
    };

    try {
      const { data } = await axios.put(`${url}/${productId}`, produtoAtualizado);
      console.log("Produto atualizado: ", data);
      alert("Produto atualizado com sucesso!");
      setNome("");
      setDescricao("");
      setCategoria("");
      setValor(0);
      setImagem("");
      setProductId("");
    } catch (error) {
      console.error("Erro ao atualizar o produto: ", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitPut();
  };

  useEffect(() => {
    if (productId) {
      axios.get(`${url}/${productId}`).then((response) => {
        const produto = response.data;
        setNome(produto.nome);
        setDescricao(produto.descricao);
        setCategoria(produto.categoria);
        setValor(produto.valor);
        setImagem(produto.imagem);
      });
    }
  }, [productId]);

  return (
    <div>
      <h2>Atualizar Produto</h2>
      <form onSubmit={handleSubmit}>
        <label>
          ID do Produto:
          <input
            type="text"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          />
        </label>
        <br />

        <label>
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>
        <br />

        <label>
          Descrição:
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          />
        </label>
        <br />

        <label>
          Categoria:
          <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="Aventura">Aventura</option>
            <option value="Estratégia">Estratégia</option>
            <option value="Família">Família</option>
          </select>
        </label>
        <br />

        <label>
          Valor:
          <input
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </label>
        <br />

        <label>
          Imagem:
          <input
            type="text"
            value={imagem}
            onChange={(e) => setImagem(e.target.value)}
          />
        </label>
        <br />

        <button type="submit">Atualizar Produto</button>
      </form>
    </div>
  );
}

export default Put;
