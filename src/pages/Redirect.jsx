import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Redirect = ({ direction }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (direction === "discord") {
      window.location.href = "https://discord.gg/ ";
    } else {
      navigate("/" + direction);
    }
  }, [direction, navigate]);

  return <></>;
};
