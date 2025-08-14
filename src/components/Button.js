import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { themeContext } from "../contexts/context";

const Button = ({ name }) => {
  const navigate = useNavigate();
  const { dark } = useContext(themeContext);

  const handleButtonsClick = () => {
    navigate("/results?q=" + name);
  };

  return (
    <div className="">
      <button
        className={`px-2 py-1 text-md basis-full md:basis-1/2 lg:basis-1/3 rounded-lg font-semibold ${dark ? "bg-[#ffffff1a] text-white" : "bg-gray-200 hover:bg-black hover:text-white"}`}
        onClick={handleButtonsClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
