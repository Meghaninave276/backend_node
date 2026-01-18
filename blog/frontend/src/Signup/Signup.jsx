import { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";
import "./signup.css"

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/auth/signup", { name, email, password });
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Signup failed. Try again.");
    }
  };

  return (
 <form onSubmit={submit} className="signup-form">

      <h1 className="text-xl font-bold mb-4">Signup</h1>
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        className="border p-2 w-full mb-2"
        required
      />
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
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Signup
      </button>
    <a href="/login">Already signed up? Login</a>

    </form>
  );
}
