import "./NotFound.css";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="notFoundContainer">
      <h1>404 NOT FOUND</h1>
      <p>Aquí hay algunos enlaces útiles:</p>
      <Link to="/">Home</Link>
    </div>
  );
};
