function Card({ titulo, descricao }) {
  return (
    <div className="card">
      <h2>{titulo}</h2>
      <p>{descricao}</p>
    </div>
  );
}

export default Card;
