import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import "./Login.css"
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/auth/login", { email, password });

      // save token in localStorage
      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/home");
    } catch (err) {
      console.error(err);
      alert("Login failed. Check your email/password.");
    }
  };

  return (
  <form onSubmit={submit} className="login-form">

      <h1 className="text-xl font-bold mb-4">Login</h1>
      <input
        placeholder="Email"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
        required
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-2"
        required
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </form>
  );
}
