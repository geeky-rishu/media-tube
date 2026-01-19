import { useSelector } from "react-redux";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className="fixed top-[112px] left-0 h-[calc(100vh-112px)] w-52 z-20">
      <div className="flex flex-col p-5 gap-5 bg-[#204d57] h-full text-white w-full">
        <div className="flex items-center gap-3">
          <img src="home_icon.png" alt="Home" className="h-6 w-6" />
          <span>Home</span>
        </div>
        <div className="flex items-center gap-3">
          <img src="explore_icon.png" alt="Explore" className="h-6 w-6" />
          <span>Explore</span>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="subscriptions_icon.png"
            alt="Subscriptions"
            className="h-6 w-6"
          />
          <span>Subscriptions</span>
        </div>
        <div className="flex items-center gap-3">
          <img src="library_icon.png" alt="Library" className="h-6 w-6" />
          <span>Library</span>
        </div>
        <div className="flex items-center gap-3">
          <img src="history_icon.png" alt="History" className="h-6 w-6" />
          <span>History</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
