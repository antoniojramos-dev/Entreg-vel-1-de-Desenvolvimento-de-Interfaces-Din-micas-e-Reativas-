import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
import Lista from "./components/Lista/Lista";
import "./App.css";

function App() {
  const tecnologias = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vite"
  ];

  return (
    <>
      <Header />

      <main className="container">

        <section className="apresentacao">
          <h2>Bem-vindo ao meu projeto!</h2>
          <p>
            Esta aplicacao foi criada para praticar
            os conceitos iniciais do React.
          </p>
        </section>

        <Card
          titulo="Componente Card"
          descricao="Este componente recebe informacoes utilizando props."
        />

        <Card
          titulo="Componentizacao"
          descricao="O React permite dividir a aplicacao em componentes reutilizaveis."
        />

        <section className="secao-lista">
          <h2>Tecnologias que estou estudando</h2>
          <Lista itens={tecnologias} />
        </section>

      </main>

      <Footer />
    </>
  );
}

export default App;
