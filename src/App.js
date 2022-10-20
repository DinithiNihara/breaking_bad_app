import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./pages/Home";
import { Character } from "./pages/Character";
import { PageNotFound } from "./pages/PageNotFound";
import { AnimatePresence } from "framer-motion";

function App() {
  const client = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/character/:id" element={<Character />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
