import { useState } from "react";
import api from "../api/api";
import useAdminGuard from "../hook/useAdminGuard";
export default function AddPet() {
  
  useAdminGuard();
  const [pet, setPet] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    photoUrl: "",
    description: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/pet", pet);
    window.location.href = "/admin/pets";
  };

  return (
    <div className="container py-5">
      <h3>Add Pet</h3>

      <form className="mt-4" onSubmit={submit}>
        <input className="form-control mb-3" placeholder="Name"
          onChange={(e) => setPet({ ...pet, name: e.target.value })} />

        <input className="form-control mb-3" placeholder="Species"
          onChange={(e) => setPet({ ...pet, species: e.target.value })} />

        <input className="form-control mb-3" placeholder="Breed"
          onChange={(e) => setPet({ ...pet, breed: e.target.value })} />

        <input className="form-control mb-3" placeholder="Age"
          onChange={(e) => setPet({ ...pet, age: e.target.value })} />

        <input className="form-control mb-3" placeholder="Image URL"
          onChange={(e) => setPet({ ...pet, photoUrl: e.target.value })} />

        <textarea className="form-control mb-4" placeholder="Description"
          onChange={(e) => setPet({ ...pet, description: e.target.value })} />

        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}
