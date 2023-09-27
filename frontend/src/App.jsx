import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import About from "./pages/about";
import Page404 from "./pages/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="*"
          element={<Page404 />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
