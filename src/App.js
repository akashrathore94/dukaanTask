import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Header />
        <Main />
      </main>
    </>
  );
}

export default App;
