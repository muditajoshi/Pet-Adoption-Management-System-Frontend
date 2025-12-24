import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Pets from "./pages/Pets";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PetDetails from "./pages/PetDetails";

import AdminPets from "./admin/AdminPets";
import AddPet from "./admin/AddPet";
import AdminApplications from "./admin/AdminApplications";
import EditPet from "./admin/EditPet";
import MyApplications from "./pages/MyApplications";




export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Pets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pet/:id" element={<PetDetails />} />
        <Route path="/my-applications" element={<MyApplications />} />

        {/* ADMIN */}
        <Route path="/admin/pets" element={<AdminPets />} />
        <Route path="/admin/pets/add" element={<AddPet />} />
        <Route path="/admin/applications" element={<AdminApplications />} />
        <Route path="/admin/pets/edit/:id" element={<EditPet />} />

      </Routes>
    </BrowserRouter>
  );
}
