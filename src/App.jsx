import { useState, useEffect } from "react";
import "./index.css";

const API_URL = "https://lista-de-compras-api-hi0w.onrender.com/api/itens";

export default function App() {
  const [itens, setItens] = useState([]);
  const [novoItem, setNovoItem] = useState("");
  const [quantidade, setQuantidade] = useState(1);
  const [editandoId, setEditandoId] = useState(null);
  const [editNome, setEditNome] = useState("");
  const [editQuantidade, setEditQuantidade] = useState(1);

  // 🟢 Buscar todos os itens
  const carregarItens = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    setItens(data);
  };

  useEffect(() => {
    carregarItens();
  }, []);

  // 🟢 Adicionar novo item
  const adicionarItem = async () => {
    if (!novoItem.trim()) return alert("Digite um nome para o item!");
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: novoItem,
        amount: quantidade,
        purchased: false,
      }),
    });
    setNovoItem("");
    setQuantidade(1);
    carregarItens();
  };

  // 🟣 Alternar purchased
  const togglePurchased = async (item) => {
    await fetch(`${API_URL}/${item.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...item, purchased: !item.purchased }),
    });
    carregarItens();
  };

  // 🟠 Iniciar edição
  const iniciarEdicao = (item) => {
    setEditandoId(item.id);
    setEditNome(item.name);
    setEditQuantidade(item.amount);
  };

  // 🟠 Atualizar item (nome e quantidade)
 const atualizarItem = async (id) => {
  const itemAtual = itens.find((i) => i.id === id);

  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...itemAtual,
      name: editNome,
      amount: editQuantidade,
    }),
  });

  if (!res.ok) {
    alert("Erro ao atualizar o item!");
    return;
  }

  setEditandoId(null);
  setEditNome("");
  setEditQuantidade(1);
  await carregarItens(); // ✅ Garante atualização da lista
};


  // 🔴 Deletar item
  const deletarItem = async (id) => {
    if (!confirm("Deseja realmente excluir este item?")) return;
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    carregarItens();
  };

  return (
    <div className="folha">
      <h1>Seja bem-vindo a</h1>
      <h1>Lista de Compras!</h1>

      <div className="input-linha">
        <input
          type="text"
          placeholder="Novo item..."
          value={novoItem}
          onChange={(e) => setNovoItem(e.target.value)}
        />
        <input
          type="number"
          min="1"
          value={quantidade}
          onChange={(e) => setQuantidade(Number(e.target.value))}
        />
        <button onClick={adicionarItem}>Adicionar</button>
      </div>

      <ul className="lista">
        {itens.map((item) => (
          <li key={item.id} className="linha-item">
            {editandoId === item.id ? (
              <div className="editando">
                <input
                  type="text"
                  value={editNome}
                  onChange={(e) => setEditNome(e.target.value)}
                />
                <input
                  type="number"
                  min="1"
                  value={editQuantidade}
                  onChange={(e) => setEditQuantidade(Number(e.target.value))}
                />
                <button onClick={() => atualizarItem(item.id)}>💾</button>
                <button onClick={() => setEditandoId(null)}>❌</button>
              </div>
            ) : (
              <>
                <span className={item.purchased ? "feito" : ""}>
                  {item.name} ({item.amount})
                </span>

                <div className="acoes">
                  <input
                    type="checkbox"
                    checked={item.purchased}
                    onChange={() => togglePurchased(item)}
                  />
                  <button onClick={() => iniciarEdicao(item)}>✏️</button>
                  <button onClick={() => deletarItem(item.id)}>🗑️</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
