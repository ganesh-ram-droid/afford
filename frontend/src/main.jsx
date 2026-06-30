import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import Home from "./Home";

createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="274662112019-rbimd303ku3ha7nnjrq4034v0cf8oomv.apps.googleusercontent.com">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </GoogleOAuthProvider>
);