# 🔍 Guia Prático: Sistema de Busca de Funcionários

Este projeto é uma aplicação interativa desenvolvida em **React** que permite a visualização e filtragem em tempo real de uma lista de colaboradores. O foco principal foi a utilização do hook `useState` combinado com o método de array `.filter()`.

## Objetivo
Evoluir uma lista estática de funcionários para um sistema dinâmico onde o usuário pode buscar colaboradores pelo nome, com feedback visual imediato.

## Tecnologias e Conceitos Aplicados

- **React JS**: Biblioteca base.
- **Hooks (`useState`)**: Para gerir o estado do termo de pesquisa.
- **Manipulação de Arrays**:
  - `.filter()`: Para criar a sublista baseada na busca.
  - `.map()`: Para renderizar os componentes na tela.
- **CSS Modules**: Estilização isolada e segura para os componentes.
- **Renderização Condicional**: Exibição de mensagens alternativas quando nenhum resultado é encontrado.

## 🎨 Interface e Estilização

A aplicação conta com um design moderno e responsivo:
- **Barra de Busca**: Input estilizado com foco interativo e sombras suaves.
- **Grid de Cards**: Layout flexível para exibição dos perfis.
- **Estado Vazio**: Mensagem de feedback caso a busca não retorne colaboradores.

## 🧠 Lógica Principal

A filtragem é feita de forma "não destrutiva", ou seja, a lista original de funcionários nunca é alterada. Criamos uma nova lista filtrada em cada renderização:

```javascript
// Captura o texto digitado
const [busca, setBusca] = useState("");

// Filtra a lista ignorando maiúsculas/minúsculas
const funcionariosFiltrados = listaFuncionarios.filter((f) =>
  f.nome.toLowerCase().includes(busca.toLowerCase())
);