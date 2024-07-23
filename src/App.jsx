import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/home";
import CardPage from "./pages/card/card";
import Header from "./components/header/header";

function App() {
  return (
    <BrowserRouter>
      <div className="fixed top-[71px] left-0 right-0 md:bottom-0 bottom-[64px] [&>*]:bg-g_Background_White_Shop [&>*]:text-black [&>*]:font-[500]">
        <div style={{ direction: "rtl" }}>
          <Header />
        </div>
        <main className="h-full overflow-y-auto overflow-x-hidden">
          <div style={{ direction: "rtl" }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/card" element={<CardPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
