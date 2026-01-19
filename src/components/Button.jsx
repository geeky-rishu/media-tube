const Button = ({ category }) => {
  return (
    <button className="px-6 py-2 bg-gray-400 rounded-lg m-2 text-center whitespace-nowrap">
      {category}
    </button>
  );
};

export default Button;
