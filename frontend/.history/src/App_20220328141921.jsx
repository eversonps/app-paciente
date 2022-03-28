import Header from "./components/Header";
import MyPacients from "./components/MyPacients";
import Main from "./components/Main"
import AddPacient from "./components/AddPacient";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Main>
            <MyPacients></MyPacients>
            <AddPacient></AddPacient>
        </Main>
    </div>
  );
}

export default App;
