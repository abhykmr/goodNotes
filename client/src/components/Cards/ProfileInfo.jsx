const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100">
        {" "}
        AB{" "}
      </div>
      <p className="text-sm font-medium">Abhay</p>
      <button
        className="text-sm bg-red-500 p-1 rounded-md text-white hover:opacity-80"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default ProfileInfo;
