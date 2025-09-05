import { useNavigate } from "react-router-dom";
import { ModeState } from "../contexts/context";

const Button = ({ name }) => {
  const navigate = useNavigate();
  const { darkMode: dark } = ModeState();

  const handleButtonsClick = () => {
    navigate("/results?q=" + name);
  };

  return (
    <div className="">
      <button
        className={`px-3 py-2 text-md rounded-lg cursor-pointer shrink-0 font-medium whitespace-nowrap ${
          dark
            ? "bg-black text-white hover:bg-slate-300 hover:bg-opacity-50 hover:text-black"
            : "bg-gray-100 hover:bg-black hover:text-white"
        }`}
        onClick={handleButtonsClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
