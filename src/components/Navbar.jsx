import { Link } from "react-router-dom";
import { getUserRole } from "../utils/auth";

export default function Navbar() {
  const role = getUserRole();
  const isLoggedIn = !!role;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">
          Pet Adoption
        </Link>

        <div className="ms-auto d-flex gap-3 align-items-center">
          <Link className="nav-link" to="/">Pets</Link>

          {!isLoggedIn && (
            <>
              <Link className="nav-link" to="/login">Login</Link>
              <Link className="btn btn-primary" to="/register">
                Register
              </Link>
            </>
          )}

          {/* ✅ USER LINK */}
          {isLoggedIn && role === "USER" && (
            <Link className="nav-link" to="/my-applications">
              My Applications
            </Link>
          )}

          {/* ✅ ADMIN LINKS */}
          {isLoggedIn && role === "ADMIN" && (
            <>
              <Link className="nav-link" to="/admin/pets">
                Admin Pets
              </Link>
              <Link className="nav-link" to="/admin/applications">
                Applications
              </Link>
            </>
          )}

          {isLoggedIn && (
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/";
              }}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
