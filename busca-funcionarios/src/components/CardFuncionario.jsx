import styles from "./CardFuncionario.module.css";

function CardFuncionario({ dados }) {
  return (
    <div className={styles.card}>
      {<img
        src={dados.foto}
        alt={`Foto de ${dados.nome}`}
        className={styles.foto}
      />
}
      <h2 className={styles.nome}>{dados.nome}</h2>
      <p className={styles.texto}><strong>Cargo:</strong> {dados.cargo}</p>
      <p className={styles.texto}><strong>Admissão:</strong> {dados.dataAdmissao}</p>
      <h3>{dados.nome}
        {dados.cargo === 'Gerente de Projetos' && "⭐"}
      </h3>
    </div>
  );
}

export default CardFuncionario;