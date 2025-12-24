import { useEffect, useState } from "react";
import api from "../api/api";
  import useAdminGuard from "../hook/useAdminGuard";
  
export default function AdminApplications() {
  useAdminGuard();
  const [apps, setApps] = useState([]);

  useEffect(() => {
    api.get("/adoption").then((res) => setApps(res.data));
  }, []);

  const update = (id, status) => {
    api.put(`/adoption/${id}`, { status }).then(() => {
      setApps((prev) =>
        prev.map((a) => (a._id === id ? { ...a, status } : a))
      );
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Adoption Requests</h2>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Pet</th>
            <th className="p-3 text-left">User</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {apps.map((a) => (
            <tr key={a._id} className="border-t">
              <td className="p-3">{a.pet.name}</td>
              <td className="p-3">{a.user.email}</td>
              <td className="p-3">{a.status}</td>
              <td className="p-3 space-x-2">
                <button
                  onClick={() => update(a._id, "APPROVED")}
                  className="px-3 py-1 bg-green-600 text-white rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => update(a._id, "REJECTED")}
                  className="px-3 py-1 bg-red-600 text-white rounded"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
