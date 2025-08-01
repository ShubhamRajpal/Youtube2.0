import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_KEYWORD_SEARCH, YOUTUBE_SEARCH_API } from "../utils/constants";
import { addKeywordSearch, cacheResults } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";
const self = new URL("../Assets/self.jpg", import.meta.url).href;

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search.cacheItems);
  const navigate = useNavigate();

  const handleSuggestionClick = (keyword) => {
    console.log(keyword);
    setSearchQuery(keyword);

    dispatch(addKeywordSearch(keyword));
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
    <div className="grid grid-flow-col p-4">
      <div className="flex col-span-1">
        <img
          className="h-6 cursor-pointer px-3"
          src="https://img.icons8.com/?size=100&id=36389&format=png&color=000000"
          alt="Hamburger Icon"
          onClick={handleToggleSidebar}
        />
        <Link to="/">
          <img
            className="h-6 mx-2"
            src="data:image/png;base64,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"
            alt="youtube-logo"
          />
        </Link>
      </div>
      <div className="col-span-10">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search"
            className="w-2/3 rounded-l-full pt-[6] pb-[4] px-3 border border-gray-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 pt-[0] pb-[10] rounded-r-full px-2 bg-gray-200">
            <svg
              className="h-6 w-6 pt-2"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 24 24">
              <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
            </svg>
          </button>
        </div>
        {searchQuery && showSuggestions && (
          <div className="absolute bg-white px-3 py-2 w-[36.8rem] mt-1 rounded-xl shadow-lg border border-gray-100 h">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  onMouseDown={() => handleSuggestionClick(s)}
                  className="py-1 flex items-center hover:bg-gray-100 cursor-pointer">
                  <svg
                    className="h-4 w-4 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 24 24">
                    <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
                  </svg>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex gap-12 justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="0.8"
          stroke="currentColor"
          className="w-8 h-9">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
        <img className="h-10 rounded-full" src={self} alt="user-icon" />
      </div>
    </div>
  );
};

export default Header;
