const Searchbar = ({ input, setInput }) => {
  return (
    <input
      className="search"
      value={input}
      placeholder="Type a movie name..."
      onChange={(e) => {
        e.preventDefault(); // WHY IS THIS NEEDED? WHAT IS THE DEFAULT BEHAVIOR IT IS PREVENTING? SEEMS THE SAME.
        return setInput(e.target.value);
      }}
    />
  );
};

export default Searchbar;
