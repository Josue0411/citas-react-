import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPaciente from "./components/ListadoPaciente";
function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <Formulario />
      <ListadoPaciente />
    </div>
  );
}

export default App;
