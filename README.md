# 🎨 Lista de Compras — Frontend (React + Netlify)

Este repositório contém o **frontend** da aplicação Lista de Compras, desenvolvido em **React**, consumindo a API hospedada no **Render**.

A interface permite criar e gerenciar itens da lista de compras de forma simples, rápida e intuitiva.

---

## 🚀 Tecnologias Utilizadas

- **React (JavaScript)** — criação de componentes, estados e consumo da API.
- **HTML e CSS puro** — interface estilizada em formato de folha de caderno.
- **Fetch API** — comunicação direta com o backend.
- **Netlify (deploy)** — hospedagem.
- **Vite** — ferramenta para rodar e buildar o projeto com alta performance.

---

## 🎯 Funcionalidades

O usuário pode:

✔ Adicionar itens  
✔ Editar nome e quantidade  
✔ Marcar como comprado  
✔ Desmarcar  
✔ Excluir itens  
✔ Ver a lista atualizada automaticamente após qualquer ação  

Tudo consumindo a API **em tempo real**.

---

## 🔌 Integração com Backend

O frontend consome a API hospedada na Render:

```
https://lista-de-compras-api-hi0w.onrender.com/api/itens
```

### **Endpoints utilizados**
- **GET** `/api/itens`
- **GET** `/api/itens/{id}`
- **POST** `/api/itens`
- **PUT** `/api/itens/{id}`
- **DELETE** `/api/itens/{id}`

---

## 🎨 Interface

A interface possui:

- Layout inspirado em **folha de caderno** 📘  
- Lista estilizada com linhas  
- Campo de texto + quantidade  
- Edição inline com **botão de salvar (ícone de disquete)**  
- Botões com hover animado  
- Diferenciação visual quando `purchased = true`  
- Estilização feita em **CSS puro**

---

## ☁️ Deploy no Netlify

O frontend é hospedado no **Netlify**, garantindo:

- Build rápido e automático  
- Deploy contínuo via GitHub  
- CORS já configurado no backend  
- Comunicação direta com a API do Render  

---

## 🧠 O que foi aprendido

- Consumo de API real com **Fetch**
- Manipulação de estado com **useState** e **useEffect**
- Atualização da UI após operações CRUD
- Deploy profissional no **Netlify**
- Integração completa entre **Front + Back**
