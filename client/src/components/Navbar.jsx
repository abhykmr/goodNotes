import SearchBar from "./SearchBar/SeachBar";
import ProfileInfo from "./Cards/ProfileInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {};
  const onClearSearch = () => {
    setSearchQuery("");
  };
  const onLogout = () => {
    navigate("/login");
  };
  return (
    <div className="bg-white flex items-center justify-between py-2 px-6  drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">
        <span className="text-slate-500">Good</span>
        <span className="text-slate-900">Notes</span>
      </h2>
      <SearchBar
        value={searchQuery}
        onChange={({ target }) => setSearchQuery(target.value)}
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
      />
      <ProfileInfo onLogout={onLogout} />
    </div>
  );
};

export default Navbar;
