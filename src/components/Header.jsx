import React from "react";
import Dropdown from "./dropdown/Dropdown";
import profilePhoto from "../assets/profilePhoto.svg";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useStore } from "../utils/appStore";
import { LOGO } from "../utils/constants";

const Header = () => {
  const { SignedIn, toggleGptSearch, gptSearch } = useStore();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Auth state change will be handled in Body.jsx
        // No need to navigate here
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGptSearchClick = () => {
    toggleGptSearch();
  };

  return (
    <div className="absolute flex items-center bg-gradient-to-b from-35% from-black w-full justify-around  z-10">
      <img className="h-12 mt-4" src={LOGO} alt="CinemaGPT logo" />

      <div className="flex items-center gap-4 mt-4 ">
        <div>
          <button
            className="bg-gray-900/80 text-white py-1 px-3 rounded-md font-bold border-black/20 border-2 hover:bg-gray-800/80 hover:scale-105 transition-transform duration-300 shadow-md"
            onClick={handleGptSearchClick}
          >
            {gptSearch ? "Home" : "AI Recommendations"}
          </button>
        </div>
        <Dropdown />

        {SignedIn && (
          <div className="flex items-center gap-2">
            <button
              className="text-white bg-[#E50914] py-1 px-3 rounded-md font-bold hover:bg-[#E50914]/80 hover:scale-105 transition-transform duration-300 shadow-md"
              onClick={handleSignOut}
            >
              Sign out
            </button>

            <img className="w-12 rounded-sm" src={profilePhoto} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
