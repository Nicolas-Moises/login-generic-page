import { SignIn } from "./pages/SignIn";
import { Routes, Route, Link } from "react-router-dom";
import { SignUp } from "./pages/SignUp";

export function App() {
  return (
    <Routes>
      <Route path="/" exact element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
