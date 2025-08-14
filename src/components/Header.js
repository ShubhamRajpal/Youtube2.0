import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa";
import { MdOutlineVideoCall } from "react-icons/md";
import { themeContext } from "../contexts/context";
import YoutubeLogo from "../Assets/YoutubeLogo";
import { RxHamburgerMenu } from "react-icons/rx";

const self = new URL("../Assets/self.jpg", import.meta.url).href;

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { dark } = useContext(themeContext);

  const searchCache = useSelector((store) => store.search.cacheItems);
  const navigate = useNavigate();

  const handleSuggestionClick = (keyword) => {
    console.log(keyword);
    setSearchQuery(keyword);

    navigate("/results?q=" + keyword);
  };

  useEffect(() => {
    // We want to make an API call after every key press
    // but if diff between 2 API calls < 200 -> decline the API call
    // > 200 make the API call

    // Debouncing

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 500);

    /*
     * if we press key -> i ("i")
     *    render the component
     *    useEffect() is called
     *    start the timer => make an API call after 200ms
     *
     * Suppose if we press key -> p before 200ms ("ip")
     *    destroy the component(useEffect return method is called)
     *    re-render the component
     *    useEffect() is again called
     *    starts a new timer => make an API call after 200ms
     *
     * Suppose 200ms passed away and no key was pressed -> so API call will be made
     *
     */

    return () => clearTimeout(timer); // called when the component is refreshed or re-rendered.
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const response = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await response.json();

    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleToggleSidebar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div
      className={`flex fixed justify-between px-0 py-4 sm:px-4 sm:py-2 h-15 z-30 w-screen ${
        dark ? "bg-[#0F0F0F]" : "bg-white"
      } `}>
      <div className="flex items-center w-[125px] sm:w-[135px]">
        <RxHamburgerMenu
          className={`cursor-pointer mx-1 sm:mx-3 ${dark && "text-white"} `}
          size={20}
          onClick={handleToggleSidebar}
        />
        <Link to="/">
          <YoutubeLogo />
        </Link>
      </div>
      <div className="w-[220px] sm:w-[250px] md:w-[450px] lg:w-[600px]">
        <div className="flex justify-start sm:pl-2 sm:justify-center items-center">
          <input
            type="text"
            placeholder="Search"
            className={`w-1/2 sm:w-2/3 rounded-l-full pt-[6] pb-[4] px-3  ${
              dark
                ? "bg-[#ffffff14] border border-zinc-700 text-white"
                : "border-gray-300 border outline-blue-400"
            }`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            className={`border border-gray-400 pt-[0] pb-[10] rounded-r-full px-2 ${
              dark ? "bg-[#ffffff14] border-zinc-700" : "bg-gray-200"
            }`}>
            <svg
              className="h-6 w-6 pt-2"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 24 24">
              <path
                d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"
                fill={`${dark ? "white" : ""}`}></path>
            </svg>
          </button>
          <div
            className={`mx-4 p-2 rounded-full bg-gray-100 ${
              dark && "bg-[#ffffff14] text-white" 
            } hidden sm:block md:block`}>
            <FaMicrophone size={20} className={`${dark && "text-black"}`} />
          </div>
        </div>
        {searchQuery && showSuggestions && (
          <div
            className={`absolute px-3 py-2 w-[13.75rem] md:w-[22rem] lg:w-[28rem] mt-1 ml-2 lg:ml-7 rounded-xl  ${
              dark
                ? "bg-[#0F0F0F] text-white outline-zinc-400"
                : "bg-white shadow-lg border border-gray-100"
            }`}>
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  onMouseDown={() => handleSuggestionClick(s)}
                  className={`py-1 px-2 flex items-center gap-1 rounded-lg ${
                    dark ? "hover:bg-[#ffffff14]" : "hover:bg-gray-100"
                  }  cursor-pointer`}>
                  <svg
                    className="h-4 w-4 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24">
                    <path
                      d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"
                      fill={`${dark ? "white" : ""}`}></path>
                  </svg>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="flex ml-0 mr-1 sm:gap-2 md:gap-3 justify-end md:justify-end items-center">
        <MdOutlineVideoCall size={30} className={`${dark && "text-white"} hidden sm:block md:block`} />
        <IoIosNotificationsOutline
          size={30}
          className={`${dark && "text-white"} hidden sm:block md:block`}
        />
        <img className="h-9 rounded-full" src={self} alt="user-icon" />
      </div>
    </div>
  );
};

export default Header;
