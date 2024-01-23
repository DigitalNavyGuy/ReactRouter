import NavBar from "./components/NavBar";
import MainSection from "./components/MainSection";
import "./App.css";

const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <NavBar />
      </div>
      <div id="main-section">
        <MainSection />
      </div>
    </div>
  );
};

export default App;
