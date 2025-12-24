import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/api";
import { getUserRole } from "../utils/auth";

export default function PetDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    api.get(`/api/pet/${id}`).then((res) => setPet(res.data));
  }, [id]);

  const applyForAdoption = async () => {
    const role = getUserRole();

    if (!role) {
      navigate("/login");
      return;
    }

    try {
      await api.post("/api/adoption", { petId: id });
      alert("Adoption request submitted");
      navigate("/my-applications");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Could not apply for adoption"
      );
    }
  };

  if (!pet) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={pet.photoUrl}   
            className="img-fluid rounded shadow"
          />
        </div>

        <div className="col-md-6">
          <h2>{pet.name}</h2>
          <p className="text-muted">
            {pet.species} • {pet.breed}
          </p>
          <p>Age: {pet.age}</p>
          <p>{pet.description}</p>

          {error && (
            <div className="alert alert-danger mt-2">
              {error}
            </div>
          )}

          <button
            className="btn btn-primary mt-3"
            onClick={applyForAdoption}
          >
            Apply for Adoption
          </button>
        </div>
      </div>
    </div>
  );
}
