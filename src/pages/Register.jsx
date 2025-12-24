import { useState } from "react";
import api from "../api/api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/api/auth/register", form);
    alert("Registered successfully");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: "90vh" }}>
      <div className="card shadow p-4" style={{ width: "400px" }}>
        <h4 className="mb-4 text-center">Create Account</h4>

        <input
          className="form-control mb-3"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          className="form-control mb-3"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          className="form-control mb-4"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="btn btn-primary w-100">
          Register
        </button>
      </div>
    </div>
  );
}
