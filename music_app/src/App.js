import Name from "./Name";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>List of Names </h3>
        <Name firstName="Abimbola " lastName="Oluwagbuyi" />
        <Name firstName="Damilola " lastName="Adebayo" />
        <Name firstName="Adeyomola " lastName="Adebayo" />
        <Name firstName="Oreoluwa " lastName="Adebayo" />
        <Name firstName="who " lastName="you be " />
      </header>
    </div>
  );
}

export default App;
