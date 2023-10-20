import Home from "./Home/home";
import MyForm from "./Home/searchform";
import Content from "./Home/content";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        {/* <Header /> */}
        {/* <MyForm /> */}
        {/* <Content /> */}
      </div>
    </Router>
  );
}

export default App;
