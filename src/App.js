import { BrowserRouter } from "react-router-dom";
import MyApp from "./tugas/6_router/MyApp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
