import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";
  import useAdminGuard from "../hook/useAdminGuard";

export default function EditPet() { 
     useAdminGuard();
    const { id } = useParams();
    const [pet, setPet] = useState(null);

    useEffect(() => {
        api.get(`/api/pet/${id}`).then((res) => setPet(res.data));
    }, [id]);

    const submit = async (e) => {
        e.preventDefault();
        await api.put(`/api/pet/${id}`, pet);
        window.location.href = "/api/admin/pets";
    };

    if (!pet) return null;

    return (
        <div className="container py-5">
            <h3>Edit Pet</h3>

            <form className="mt-4" onSubmit={submit}>
                <input className="form-control mb-3" value={pet.name}
                    onChange={(e) => setPet({ ...pet, name: e.target.value })} />

                <input className="form-control mb-3" value={pet.species}
                    onChange={(e) => setPet({ ...pet, species: e.target.value })} />

                <input className="form-control mb-3" value={pet.breed}
                    onChange={(e) => setPet({ ...pet, breed: e.target.value })} />

                <input className="form-control mb-3" value={pet.age}
                    onChange={(e) => setPet({ ...pet, age: e.target.value })} />

                <input className="form-control mb-3" value={pet.photoUrl}
                    onChange={(e) => setPet({ ...pet, photoUrl: e.target.value })} />
                <button className="btn btn-primary">Update</button>
            </form>
        </div>
    );
}
