import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUserRole } from "../utils/auth";

export default function useAdminGuard() {
  const navigate = useNavigate();

  useEffect(() => {
    const role = getUserRole();

    // not logged in
    if (!role) {
      navigate("/login", { replace: true });
      return;
    }

    // logged in but not admin
    if (role !== "ADMIN") {
      navigate("/", { replace: true });
    }
  }, [navigate]);
}
