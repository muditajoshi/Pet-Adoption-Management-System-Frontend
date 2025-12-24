import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";
  import useAdminGuard from "../hook/useAdminGuard";
  
export default function AdminPets() {
  useAdminGuard();
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/pet").then((res) => setPets(res.data));
  }, []);

  const deletePet = async (id) => {
    if (!window.confirm("Delete this pet?")) return;
    await api.delete(`/pet/${id}`);
    setPets(pets.filter((p) => p._id !== id));
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between mb-4">
        <h3>Manage Pets</h3>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/admin/pets/add")}
        >
          + Add Pet
        </button>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Species</th>
            <th>Status</th>
            <th width="200">Actions</th>
          </tr>
        </thead>

        <tbody>
          {pets.map((pet) => (
            <tr key={pet._id}>
              <td>{pet.name}</td>
              <td>{pet.species}</td>
              <td>{pet.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() =>
                    navigate(`/admin/pets/edit/${pet._id}`)
                  }
                >
                  Edit
                </button>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deletePet(pet._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
