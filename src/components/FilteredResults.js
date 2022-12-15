import { useState, useEffect } from "react";

const FilterResults = ({ input }) => {
  const possibleMovies = [
    { rank: 1, name: "Charade" },
    { rank: 2, name: "Shawshank Redemption" },
    { rank: 3, name: "A Few Good Men" },
    { rank: 4, name: "American History X" },
    { rank: 5, name: "12 Angry Men" },
    { rank: 6, name: "Inglourious Basterds" },
    { rank: 7, name: "Parasite" },
    { rank: 8, name: "Halloween" },
    { rank: 9, name: "Silence of the Lambs" },
    { rank: 10, name: "Se7en" }
  ];

  const [matches, setMatches] = useState([""]); // WHY CAN'T THIS GO OUTSIDE OF FilterResults()?

  useEffect(() => {
    if (!input) {
      setMatches([]);
    } else {
      setMatches(
        possibleMovies.filter((m) =>
          m.name.toLowerCase().includes(input.toLowerCase())
        )
      );
    }
  }, [input]);

  return (
    <ul className="filteredresults">
      {matches.map((match) => (
        <li>
          {match.name} ({match.rank})
        </li>
      ))}
    </ul>
  );
};

export default FilterResults;
