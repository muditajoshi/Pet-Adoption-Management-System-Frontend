import { useEffect, useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";


export default function Pets() {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    api.get("/api/pet").then((res) => {
      console.log(res)
      setPets(res.data)
    });
  }, []);

  return (
    <div className="container py-5">
      <h3 className="mb-4">Available Pets</h3>

      <div className="row g-4">
        {pets.map((pet) => (
          <div className="col-md-4" key={pet._id}>
            <div className="card shadow-sm h-100">
              <img
                src={pet.photoUrl}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title">{pet.name}</h5>
                <p className="card-text text-muted">
                  {pet.species} • {pet.breed}
                </p>
                <button
                  className="btn btn-outline-primary w-100"
                  onClick={() => navigate(`/pet/${pet._id}`)}
                >
                  View Details
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
