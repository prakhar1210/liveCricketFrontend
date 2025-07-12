"use client";

import Link from "next/link";
import { Match } from "../app/types/match";

type Props = {
  match: Match;
};

export default function MatchCard({ match }: Props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px" }}>
      <h2>{match.teams.join(" vs ")}</h2>
      <p>Venue: {match.venue}</p>
      <Link href={`/match/${match.matchId}`}>📺 View Commentary</Link>
    </div>
  );
}
