import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, createContext } from "react";
import { Home } from "./pages/Home";
import { Character } from "./pages/Character";

export const AppContext = createContext();

function App() {
  const client = new QueryClient();
  const [character, setCharacter] = useState({});

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{character,setCharacter}}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/character/:id" element={<Character />} />
              <Route path="*" element={<h1> PAGE NOT FOUND</h1>} />
            </Routes>
          </BrowserRouter>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
