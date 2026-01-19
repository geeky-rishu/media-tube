import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
const MainContainer = () => {
  return (
    <div className="pt-0 h-full bg-gray-100 grid justify-center col-span-4 ml-52">
      <ButtonList />
      <div className="mt-2">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
