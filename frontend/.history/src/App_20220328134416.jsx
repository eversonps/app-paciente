import Header from "./components/Header";
import MyPacients from "./components/MyPacients";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Main>
            <MyPacients></MyPacients>
        </Main>
    </div>
  );
}

export default App;
