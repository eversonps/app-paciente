import Header from "./components/Header";
import MyPacients from "./components/MyPacients";
import Main from ""

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
