# Pet Adoption Management System (Frontend)

This is the frontend for the Pet Adoption Management System.
It was built alongside the backend as a short full‑stack MERN assignment (2 days) to demonstrate real‑world React usage, role‑based UI, and API integration.

---

## What this frontend does

### Visitor
- View all available pets
- View pet details
- Navigate through the application without login

### User
- Register and login
- Apply for pet adoption
- View own adoption applications and their status

### Admin
- Manage pets (add, edit, delete)
- View all adoption applications
- Approve or reject adoption requests

---

## Tech Stack

- React (Vite)
- React Router
- Axios
- Bootstrap 5
- JWT-based authentication (via backend)

---

## Project Structure

```
src
admin
AdminPets.jsx
 AddPet.jsx
EditPet.jsx
AdminApplications.jsx

 pages
 Pets.jsx
 PetDetails.jsx
 Login.jsx
Register.jsx
 MyApplications.jsx

 components
 Navbar.jsx


 api.js

 utils
auth.js

App.jsx
main.jsx
```

---

## Authentication & Authorization

- JWT token is stored in `localStorage`
- Axios interceptor attaches token automatically
- User role (`USER` / `ADMIN`) is decoded from JWT
- UI elements and pages are conditionally rendered based on role
- Admin pages redirect non‑admins to home or login

---

## Environment Variables

Create a `.env` file in the root:

```env
VITE_API_URL=http://localhost:5000/api
```

Restart the dev server after adding `.env`.

---

## Running the project

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## Notes

- UI is intentionally kept clean and simple using Bootstrap
- Focus is on correct data flow, role handling, and UX
- Backend enforces real security; frontend controls visibility and navigation

---

## Author

Built as part of a full stack MERN assignment to demonstrate practical React, API integration, and role based UI handling.
