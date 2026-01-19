import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const searchResults = useSelector((store) => store.search);

  useEffect(() => {
    // Debounce logic

    const timer = setTimeout(async () => {
      // Make API call after 500ms of inactivity
      console.log("API Call for:", searchQuery);
      if (searchResults[searchQuery]) {
        console.log("Redux store Cache");

        setSuggestions(searchResults[searchQuery]);
        return;
      } else {
        console.log("Not present in Redux store cache");

        console.log("Sending API request");
        // TODO: Implement actual API call here
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestions(json[1]);
        console.log(json);
        // Cache the results in Redux Store (if needed)
        dispatch(cacheResults({ [searchQuery]: json[1] }));
      }
    }, 2000);
    return () => clearTimeout(timer); // Cleanup the timer on query change
  }, [searchQuery]);

  return (
    <div className="fixed top-0 left-0 w-full z-30 grid grid-flow-col p-7 shadow-lg py-0 m-0 gap-10 bg-[#2a5e69]">
      <div className="flex items-center col-span-1 ">
        <img
          onClick={toggleMenuHandler}
          src="hamburger_icon.png"
          alt=""
          className="h-8 w-8 cursor-pointer"
        />
        <img
          src="Untitled_design-removebg-preview.png"
          alt="logo"
          className="h-28 w-28 mx-2"
        />
      </div>
      <div className="col-span-10 px-10 flex justify-center m-4 p-5 ">
        <input
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search"
          className="w-1/2 p-2 border border-gray-300  bg-white rounded-l-full "
        />
        <button className="w-1/20 p-2 border border-gray-300  bg-white rounded-r-full">
          🔍
        </button>
        {/* Suggestion Box */}
        {suggestions.length > 0 && showSuggestions && (
          <div className="absolute bg-white w-[37rem] mt-12 border border-gray-300 rounded-lg shadow-lg">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSearchQuery(s);
                    setSuggestions([]);
                  }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1 flex justify-end items-center">
        <img src="profile.png" alt="" className="h-10 w-10 rounded-full" />
      </div>
    </div>
  );
};

export default Head;
