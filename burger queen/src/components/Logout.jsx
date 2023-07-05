import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <a href="#" onClick={handleLogout} className="link-dark rounded">
      <i className="bi bi-box-arrow-right"></i> Salir
    </a>
  );
};