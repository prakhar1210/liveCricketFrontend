"use client";

import { useEffect, useState } from "react";
import MatchCard from "../components/MatchCard";
import { Match } from "./types/match";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/matches")
      .then((res) => res.json())
      .then((data) => setMatches(data))
      .catch((err) => console.error("Fetch error: ", err));
  }, []);

  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold mt-10">🏏 Ongoing Cricket Matches</h1>
      {matches.length === 0 ? (
        <p>No matches found.</p>
      ) : (
        matches.map((match) => <MatchCard key={match._id} match={match} />)
      )}
    </div>
  );
}
