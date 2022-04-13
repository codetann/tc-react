import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Page, NavBar } from "@components";

function App() {
  return (
    <BrowserRouter>
      <Page>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Page>
    </BrowserRouter>
  );
}

export default App;
