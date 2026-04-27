import { useState } from "react";
import CardFuncionario from "./components/CardFuncionario";
import styles from "./App.module.css";

function App() {
  const listaFuncionarios = [
    {
      id: 1,
      nome: "Ana Silva",
      cargo: "Desenvolvedora Frontend",
      foto: "https://randomuser.me/api/portraits/women/99.jpg",
    },
    {
      id: 2,
      nome: "Carlos Eduardo",
      cargo: "Engenheiro de Software",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      nome: "Mariana Souza",
      cargo: "Designer UI/UX",
      foto: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      nome: "Rafael Lima",
      cargo: "Engenheiro DevOps",
      foto: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      id: 5,
      nome: "Mariana Costa",
      cargo: "Desenvolvedora Frontend",
      foto: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 6,
      nome: "Lucas Oliveira",
      cargo: "Desenvolvedor Backend",
      foto: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 7,
      nome: "Beatriz Soares",
      cargo: "UX/UI Designer",
      foto: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 8,
      nome: "André Santos",
      cargo: "Analista de Dados",
      foto: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 9,
      nome: "Juliana Vieira",
      cargo: "Gerente de Projetos",
      foto: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 10,
      nome: "Ricardo Gomes",
      cargo: "Especialista em Segurança",
      foto: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      id: 11,
      nome: "Camila Nunes",
      cargo: "QA Engineer",
      foto: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: 12,
      nome: "Felipe Rocha",
      cargo: "Arquiteto de Software",
      foto: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    {
      id: 13,
      nome: "Letícia Mendes",
      cargo: "Product Owner",
      foto: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      id: 14,
      nome: "Gabriel Souza",
      cargo: "Cientista de Dados",
      foto: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 15,
      nome: "Fernanda Dias",
      cargo: "Scrum Master",
      foto: "https://randomuser.me/api/portraits/women/50.jpg",
    },
    {
      id: 16,
      nome: "Thiago Martins",
      cargo: "Desenvolvedor Mobile",
      foto: "https://randomuser.me/api/portraits/men/60.jpg",
    },
    {
      id: 17,
      nome: "Patrícia Alves",
      cargo: "Analista de Suporte",
      foto: "https://randomuser.me/api/portraits/women/17.jpg",
    },
    {
      id: 18,
      nome: "Bruno Carvalho",
      cargo: "Engenheiro de Machine Learning",
      foto: "https://randomuser.me/api/portraits/men/81.jpg",
    },
    {
      id: 19,
      nome: "Sofia Helena",
      cargo: "Desenvolvedora Fullstack",
      foto: "https://randomuser.me/api/portraits/women/90.jpg",
    },
    {
      id: 20,
      nome: "Gustavo Ferreira",
      cargo: "Desenvolvedor Backend",
      foto: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 21,
      nome: "Larissa Bueno",
      cargo: "Analista de Marketing",
      foto: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 22,
      nome: "Marcos Paulo",
      cargo: "Engenheiro de Nuvem",
      foto: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 23,
      nome: "Isabela Rios",
      cargo: "Designer de Interação",
      foto: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 24,
      nome: "Vinícius Jr",
      cargo: "Desenvolvedor Java",
      foto: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 25,
      nome: "Amanda Lima",
      cargo: "Gerente de Contas",
      foto: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      id: 26,
      nome: "Rodrigo Silva",
      cargo: "DBA SQL Server",
      foto: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      id: 27,
      nome: "Tatiane Rezende",
      cargo: "Analista de RH",
      foto: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 28,
      nome: "Enzo Gabriel",
      cargo: "Estagiário de TI",
      foto: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: 29,
      nome: "Helena Castro",
      cargo: "Coordenadora de Vendas",
      foto: "https://randomuser.me/api/portraits/women/11.jpg",
    },
    {
      id: 30,
      nome: "Leandro Cruz",
      cargo: "Engenheiro de Redes",
      foto: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: 31,
      nome: "Bianca Farias",
      cargo: "Consultora ERP",
      foto: "https://randomuser.me/api/portraits/women/13.jpg",
    },
    {
      id: 32,
      nome: "Eduardo Antunes",
      cargo: "Tech Lead",
      foto: "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
      id: 33,
      nome: "Priscila Novaes",
      cargo: "Social Media",
      foto: "https://randomuser.me/api/portraits/women/15.jpg",
    },
    {
      id: 34,
      nome: "Cláudio Duarte",
      cargo: "Especialista Linux",
      foto: "https://randomuser.me/api/portraits/men/16.jpg",
    },
    {
      id: 35,
      nome: "Raquel Barros",
      cargo: "Desenvolvedora Python",
      foto: "https://randomuser.me/api/portraits/women/18.jpg",
    },
    {
      id: 36,
      nome: "Samuel Ramos",
      cargo: "Arquiteto de Soluções",
      foto: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    {
      id: 37,
      nome: "Vanessa Prado",
      cargo: "Copywriter",
      foto: "https://randomuser.me/api/portraits/women/20.jpg",
    },
    {
      id: 38,
      nome: "Igor Guimarães",
      cargo: "Cibersegurança",
      foto: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      id: 39,
      nome: "Mônica Iozzi",
      cargo: "UX Researcher",
      foto: "https://randomuser.me/api/portraits/women/23.jpg",
    },
    {
      id: 40,
      nome: "Renato Russo",
      cargo: "Desenvolvedor C#",
      foto: "https://randomuser.me/api/portraits/men/24.jpg",
    },
    {
      id: 41,
      nome: "Daniela Mercury",
      cargo: "Diretora de Arte",
      foto: "https://randomuser.me/api/portraits/women/25.jpg",
    },
    {
      id: 42,
      nome: "Paulo André",
      cargo: "Analista de BI",
      foto: "https://randomuser.me/api/portraits/men/26.jpg",
    },
    {
      id: 43,
      nome: "Carolina Dieckmann",
      cargo: "Customer Success",
      foto: "https://randomuser.me/api/portraits/women/27.jpg",
    },
    {
      id: 44,
      nome: "Sérgio Moro",
      cargo: "Compliance Officer",
      foto: "https://randomuser.me/api/portraits/men/28.jpg",
    },
    {
      id: 45,
      nome: "Fabiana Karla",
      cargo: "Gerente Financeira",
      foto: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    {
      id: 46,
      nome: "Mateus Solano",
      cargo: "Desenvolvedor Android",
      foto: "https://randomuser.me/api/portraits/men/30.jpg",
    },
    {
      id: 47,
      nome: "Gisele Bündchen",
      cargo: "Relações Públicas",
      foto: "https://randomuser.me/api/portraits/women/31.jpg",
    },
    {
      id: 48,
      nome: "Wagner Moura",
      cargo: "Coordenador de Operações",
      foto: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      id: 49,
      nome: "Paolla Oliveira",
      cargo: "Estrategista Digital",
      foto: "https://randomuser.me/api/portraits/women/34.jpg",
    },
    {
      id: 50,
      nome: "Lázaro Ramos",
      cargo: "Líder de Inovação",
      foto: "https://randomuser.me/api/portraits/men/35.jpg",
    },
    {
      id: 51,
      nome: "Alice Wegmann",
      cargo: "Product Designer",
      foto: "https://randomuser.me/api/portraits/women/36.jpg",
    },
    {
      id: 52,
      nome: "Cauã Reymond",
      cargo: "Engenheiro de QA",
      foto: "https://randomuser.me/api/portraits/men/37.jpg",
    },
    {
      id: 53,
      nome: "Bruna Marquezine",
      cargo: "Brand Manager",
      foto: "https://randomuser.me/api/portraits/women/38.jpg",
    },
    {
      id: 54,
      nome: "Chay Suede",
      cargo: "Desenvolvedor iOS",
      foto: "https://randomuser.me/api/portraits/men/39.jpg",
    },
    {
      id: 55,
      nome: "Taís Araújo",
      cargo: "Diretora de RH",
      foto: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
      id: 56,
      nome: "Selton Mello",
      cargo: "Especialista SEO",
      foto: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      id: 57,
      nome: "Débora Falabella",
      cargo: "Analista de Requisitos",
      foto: "https://randomuser.me/api/portraits/women/42.jpg",
    },
    {
      id: 58,
      nome: "Vladimir Brichta",
      cargo: "SysAdmin",
      foto: "https://randomuser.me/api/portraits/men/43.jpg",
    },
    {
      id: 59,
      nome: "Cléo Pires",
      cargo: "Gerente de Comunicação",
      foto: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: 60,
      nome: "Alexandre Nero",
      cargo: "Analista de Infra",
      foto: "https://randomuser.me/api/portraits/men/46.jpg",
    },
    {
      id: 61,
      nome: "Ísis Valverde",
      cargo: "Web Designer",
      foto: "https://randomuser.me/api/portraits/women/47.jpg",
    },
    {
      id: 62,
      nome: "Murilo Benício",
      cargo: "Desenvolvedor Go",
      foto: "https://randomuser.me/api/portraits/men/48.jpg",
    },
    {
      id: 63,
      nome: "Grazi Massafera",
      cargo: "Growth Hacker",
      foto: "https://randomuser.me/api/portraits/women/49.jpg",
    },
    {
      id: 64,
      nome: "Reynaldo Gianecchini",
      cargo: "Consultor de TI",
      foto: "https://randomuser.me/api/portraits/men/51.jpg",
    },
    {
      id: 65,
      nome: "Giovanna Antonelli",
      cargo: "Vendas Enterprise",
      foto: "https://randomuser.me/api/portraits/women/53.jpg",
    },
    {
      id: 66,
      nome: "Rodrigo Santoro",
      cargo: "CTO",
      foto: "https://randomuser.me/api/portraits/men/54.jpg",
    },
    {
      id: 67,
      nome: "Alinne Moraes",
      cargo: "UI Specialist",
      foto: "https://randomuser.me/api/portraits/women/55.jpg",
    },
    {
      id: 68,
      nome: "Caio Castro",
      cargo: "Scrum Master",
      foto: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      id: 69,
      nome: "Luiz Felipe",
      cargo: "Desenvolvedor de Sistemas",
      foto: "https://avatars.githubusercontent.com/u/201222954?v=4",
    },
    
  ];

  const [busca, setBusca] = useState("");
  const funcionariosFiltrados = listaFuncionarios.filter((f) =>
    f.nome.toLowerCase().includes(busca.toLowerCase()),
  );

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Diretório de Colaboradores 👥</h1>

        <input
          type="text"
          placeholder="Pesquisar por nome..."
          className={styles.barraBusca}
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </header>

      <main className={styles.grid}>
        {funcionariosFiltrados.length > 0 ? (
          funcionariosFiltrados.map((func) => (
            <CardFuncionario key={func.id} dados={func} />
          ))
        ) : (
          <div className={styles.vazio}>
            <p>Ops! Nenhum colaborador encontrado com este nome. 🤔</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
