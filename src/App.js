import "./App.css";
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage/Home";

function App() {
  return (
    <>
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Main>
    </>
  );
}

export default App;
