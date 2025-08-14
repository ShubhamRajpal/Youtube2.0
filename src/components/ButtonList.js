import Button from "./Button";
import { btnList } from "../utils/helper";
import { useSelector } from "react-redux";

const ButtonList = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);


  return (
    <div
      className={`flex flex-row gap-1 overflow-y-scroll sm:overflow-hidden no-scrollbar sm:gap-2 md:gap-3 lg:gap-2 py-3 ${
        !isMenuOpen ? "w-screen" : "sm:w-[640px] md:w-[760px] xl:w-[1113px]"
      }`}>
      {btnList.map((item, index) => (
        <Button key={index} name={item} />
      ))}
    </div>
  );
};

export default ButtonList;
