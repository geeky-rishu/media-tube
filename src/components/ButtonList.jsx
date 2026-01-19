import Button from "./Button";
const ButtonList = () => {
  const categories = [
    "All",
    "Music",
    "Sports",
    "Gaming",
    "News",
    "Movies",
    "Fashion",
    "Live",
    "Learning",
    "Spotlight",
    "360° Video",
    "Comedy",
    "Travel",
    "Documentary",
    "Entertainment",
    "Science & Technology",
    "Education",
    "Autos & Vehicles",
    "Pets & Animals",
    "Howto & Style",
    "People & Blogs",
    "Nonprofits & Activism",
    "Movies & Shows",
    "Trailers",
  ];
  return (
    <div className="flex flex-nowrap overflow-x-auto p-2 gap-2 border-b border-gray-300 bg-white scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
      {categories.map((category) => (
        <Button key={category} category={category} />
      ))}
    </div>
  );
};

export default ButtonList;
