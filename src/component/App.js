import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import NavBar from "./NavBar";


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <NavBar />
      </Router>
    </div>
  );
}

export default App;
