"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Commentary = {
  over: number;
  ball: number;
  event: string;
  description: string;
};

type Match = {
  matchId: number;
  teams: string[];
  venue: string;
  commentary: Commentary[];
};

export default function MatchPage() {
  const { matchid } = useParams();
  const [match, setMatch] = useState<Match | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/matches/${matchid}`)
      .then((res) => res.json())
      .then((data) => {
        setMatch(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching match:", err);
        setLoading(false);
      });
  }, [matchid]);

  if (loading) return <p>Loading commentary...</p>;

  if (!match) return <p>No match found for ID {matchid}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>
        {match.teams.join(" vs ")} at {match.venue}
      </h1>
      <h2>Live Commentary 📝</h2>
      {match.commentary.length === 0 ? (
        <p>No commentary available yet.</p>
      ) : (
        match.commentary.map((entry, index) => (
          <div
            key={index}
            style={{
              borderBottom: "1px solid #ddd",
              padding: "8px 0",
            }}
          >
            <strong>
              Over {entry.over}.{entry.ball}: {entry.event}
            </strong>
            <p>{entry.description}</p>
          </div>
        ))
      )}
    </div>
  );
}
