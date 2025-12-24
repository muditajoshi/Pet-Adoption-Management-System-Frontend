import { useEffect, useState } from "react";
import api from "../api/api";
import { getUserRole } from "../utils/auth";
import { useNavigate } from "react-router-dom";

export default function MyApplications() {
  const [apps, setApps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const role = getUserRole();
    if (!role) {
      navigate("/login");
      return;
    }

    api.get("/api/adoption/applies").then((res) => setApps(res.data));
  }, [navigate]);

  return (
    <div className="container py-5">
      <h3 className="mb-4">My Applications</h3>

      {apps.length === 0 ? (
        <p className="text-muted">No applications found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-light">
              <tr>
                <th>Pet Name</th>
                <th>Species</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {apps.map((a) => (
                <tr key={a._id}>
                  <td>{a.pet?.name}</td>
                  <td>{a.pet?.species}</td>
                  <td>
                    <span
                      className={`badge ${
                        a.status === "APPROVED"
                          ? "bg-success"
                          : a.status === "REJECTED"
                          ? "bg-danger"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {a.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
