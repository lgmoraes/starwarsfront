import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Header from "./components/Header";
import List from "./pages/List";
import Character from "./pages/Character";
import Compare from "./pages/Compare";
import Error404 from "./pages/Error404";

import "./index.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/character/:id" element={<Character />}></Route>
          <Route path="/compare" element={<Compare />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  </React.StrictMode>
);
