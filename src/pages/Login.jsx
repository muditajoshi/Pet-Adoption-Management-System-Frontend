import { useState } from "react";
import api from "../api/api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    // ✅ validations
    if (!form.email || !form.password) {
      setError("Email and password are required");
      return;
    }

    if (!form.email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    try {
      const res = await api.post("/api/auth/login", form);
      localStorage.setItem("token", res.data.token);
      window.location.href = "/";
    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed. Try again."
      );
    }
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "90vh" }}
    >
      <form
        className="card shadow p-4"
        style={{ width: "400px" }}
        onSubmit={submit}
      >
        <h4 className="mb-4 text-center">Login</h4>

        {error && (
          <div className="alert alert-danger py-2">
            {error}
          </div>
        )}

        <input
          className="form-control mb-3"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="password"
          className="form-control mb-4"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
        />

        <button
          type="submit"
          className="btn btn-primary w-100"
        >
          Login
        </button>
      </form>
    </div>
  );
}
