import Button from "./Button";
import { btnList } from "../utils/helper";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { ModeState } from "../contexts/context";

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const carouselRef = useRef(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);
  const { darkMode: dark } = ModeState();

  const carouselbuttonHandler = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;

      if (container.scrollLeft === 0) {
        setShowPrevButton(false);
      } else {
        setShowPrevButton(true);
      }

      if (
        container.scrollLeft + container.offsetWidth + 100 >=
        container.scrollWidth
      ) {
        setShowNextButton(false);
      } else {
        setShowNextButton(true);
      }
    }
  };

  const handleScroll = (direction) => {
    const scrollAmount = 200;
    if (carouselRef.current) {
      const container = carouselRef.current;
      if (direction === "prev") {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else if (direction === "next") {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className={`flex md:px-1 md:py-2 p-1 ${
        !isMenuOpen
          ? "w-screen"
          : "w-screen sm:w-[640px] md:w-[760px] xl:w-[1113px]"
      }`}>
      <div
        ref={carouselRef}
        className={`flex gap-1 max-w-[calc(100vw-20px)] overflow-x-auto no-scrollbar items-center mx-auto ${dark ? "bg-[#0F0F0F]" : "bg-white"}`}
        onScroll={carouselbuttonHandler}>
        {btnList.map((item, index) => (
          <Button key={index} name={item} />
        ))}
      </div>

      {showPrevButton && (
        <div
          className={`absolute ${
            !isMenuOpen ? "left-0" : "left-[200px]"
          } -translate-y-1/5 pr-1 md:pl-5 pl-0 bg-gradient-to-r ${dark ? "" : "from-transparent to-white"}`}>
          <button
            onClick={() => handleScroll("prev")}
            className={`rounded-full ${dark ? "bg-white text-black" : "hover:bg-black bg-gray-200 text-white"} p-2`}>
            <MdNavigateBefore size={25} />
          </button>
        </div>
      )}

      {showNextButton && (
        <div className={`absolute right-0 lg:px-4 px-1 bg-gradient-to-l ${dark ? "" : "from-white to-transparent"}`}>
          <button
            onClick={() => handleScroll("next")}
            className={`rounded-full  ${dark ? "bg-white text-black" : "hover:bg-black bg-gray-200 text-white"} py-2 pr-3 pl-2`}>
            <MdNavigateNext size={25} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ButtonList;
