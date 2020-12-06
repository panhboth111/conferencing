import {BrowserRouter,Route} from "react-router-dom"
import "./App.css"
import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route path="/" component={Home} />
        </div>  
      </BrowserRouter>
  );
}

export default App;
